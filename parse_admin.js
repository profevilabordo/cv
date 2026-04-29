const fs = require('fs');
const input_text = fs.readFileSync('input_admin.txt', 'utf8');

const answers = {
    1: "a",
    2: "c",
    3: "c",
    4: "c",
    5: "b",
    6: "c",
    7: "c",
    8: "b",
    9: "c",
    10: "b",
    11: "b",
    12: "b",
    13: "c",
    14: "a",
    15: "c",
    16: "Falso",
    17: "Verdadero",
    18: "Falso",
    19: "Verdadero",
    20: "Falso",
    21: "Verdadero",
    22: "Falso",
    23: "Falso",
    24: "Falso",
    25: "Falso",
    26: "Falso",
    27: "Falso",
    28: "Falso",
    29: "Falso",
    30: "Falso"
};

let lines = input_text.split(/\r?\n/);
let questions = [];
let current_q = null;

for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    let m = line.match(/^(\d+)\.\s*(.*)/);
    if (m) {
        if (current_q) {
            questions.push(current_q);
        }
        let q_num = parseInt(m[1]);
        
        current_q = {
            q: m[2],
            a: [],
            c: 0,
            q_num: q_num
        };
    } else if (line.match(/^[a-d]\)/)) {
        current_q.a.push(line.substring(3).trim());
    } else if (line.includes("( ) Verdadero")) {
        current_q.a = ["Verdadero", "Falso"];
    } else if (current_q && current_q.a.length === 0) {
        current_q.q += " " + line;
    }
}

if (current_q) {
    questions.push(current_q);
}

let final_q = [];
for (let q of questions) {
    let num = q.q_num;
    let ans = answers[num];
    
    let c_idx = 0;
    if (q.a[0] === "Verdadero") {
        c_idx = (ans === "Verdadero") ? 0 : 1;
    } else {
        c_idx = ans.charCodeAt(0) - 97;
    }
    
    final_q.push({
        q: q.q,
        a: q.a,
        c: c_idx
    });
}

fs.writeFileSync('admin_bank.json', JSON.stringify(final_q, null, 2), 'utf8');
