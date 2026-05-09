import re

with open('panel-docente.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_func = """async function sb(table, params){
  // 1. Obtener cantidad total de registros
  var urlCount = SUPABASE_URL + "/rest/v1/" + table + "?" + (params || "select=*") + "&limit=1";
  var rCount = await fetch(urlCount, {
    method: "HEAD",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": "Bearer " + SUPABASE_KEY,
      "Prefer": "count=exact"
    }
  });

  var cr = rCount.headers.get("Content-Range");
  if(!cr) {
    var allData = [];
    var limit = 1000;
    var offset = 0;
    var hasMore = true;
    while(hasMore){
      var url = SUPABASE_URL + "/rest/v1/" + table + "?" + (params || "select=*") + "&limit=" + limit + "&offset=" + offset;
      var r = await fetch(url, { headers: { "apikey": SUPABASE_KEY, "Authorization": "Bearer " + SUPABASE_KEY, "Content-Type": "application/json" } });
      var data = await r.json();
      if(data && Array.isArray(data) && data.length > 0){
        allData = allData.concat(data);
        offset += limit;
        if(data.length < limit) hasMore = false;
      } else { hasMore = false; }
    }
    return allData;
  }

  var total = parseInt(cr.split("/")[1]);
  if(total === 0) return [];

  // 2. Hacer las peticiones en paralelo de a 1000
  var limit = 1000;
  var promises = [];
  for(var offset = 0; offset < total; offset += limit){
    var url = SUPABASE_URL + "/rest/v1/" + table + "?" + (params || "select=*") + "&limit=" + limit + "&offset=" + offset;
    promises.push(fetch(url, {
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": "Bearer " + SUPABASE_KEY,
        "Content-Type": "application/json"
      }
    }).then(function(res){ return res.json(); }));
  }

  var results = await Promise.all(promises);
  var allData = [];
  results.forEach(function(batch){
    if(batch && Array.isArray(batch)) allData = allData.concat(batch);
  });
  return allData;
}"""

content = re.sub(r'async function sb\(table, params\)\{.*?return allData;\n\}', new_func, content, flags=re.DOTALL)

with open('panel-docente.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
