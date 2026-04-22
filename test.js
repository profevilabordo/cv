var filtered = {
  "nucleo_a_n7": { cur: 2 },
  "nucleo_a_n7_inp_0": "Respuesta concepto 1",
  "nucleo_a_n7_inp_1": "Respuesta concepto 2",
  "nucleo_a_n7_inp_2": "Respuesta concepto 3",
  "nucleo_a_n7_sub_0": true,
  "nucleo_a_n7_sub_1": true,
  "nucleo_a_n7_sub_2": true,
  "nucleo_a_n1": { nx: 1, dn: false, pl: {} }
};

var nuc = "nucleo_a";
var act7Answers = false;
for(var k in filtered) {
  if(k.indexOf(nuc + '_n7_inp_') === 0) {
    var val = filtered[k];
    if(val && val.toString().trim().length > 0) {
      act7Answers = true;
      var part = k.split('_inp_');
      var conceptIndex = parseInt(part[part.length-1]) + 1;
      console.log("Found:", conceptIndex, val);
    }
  }
}
console.log("act7Answers:", act7Answers);
