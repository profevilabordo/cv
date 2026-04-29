const fs = require('fs');
const input_text = fs.readFileSync('input.txt', 'utf8');

const answers1_60 = {
    1: "c", 2: "b", 3: "c", 4: "d", 5: "c", 6: "c", 7: "c", 8: "c", 9: "c", 10: "b",
    11: "c", 12: "d", 13: "b", 14: "b", 15: "b", 16: "b", 17: "c", 18: "c", 19: "b", 20: "a",
    21: "c", 22: "b", 23: "c", 24: "b", 25: "c", 26: "b", 27: "a", 28: "d", 29: "b", 30: "c",
    31: "Falso", 32: "Verdadero", 33: "Falso", 34: "Falso", 35: "Falso", 36: "Falso", 37: "Falso", 38: "Falso", 39: "Verdadero", 40: "Verdadero",
    41: "Verdadero", 42: "Falso", 43: "Verdadero", 44: "Falso", 45: "Falso", 46: "Falso", 47: "Verdadero", 48: "Falso", 49: "Falso", 50: "Falso",
    51: "Verdadero", 52: "Falso", 53: "Falso", 54: "Falso", 55: "Falso", 56: "Falso", 57: "Verdadero", 58: "Falso", 59: "Verdadero", 60: "Falso"
};

const answers61_80 = {
    1: "a", 2: "a", 3: "a", 4: "c", 5: "b", 6: "c", 7: "b", 8: "c", 9: "b", 10: "b",
    11: "Falso", 12: "Falso", 13: "Falso", 14: "Falso", 15: "Falso", 16: "Falso", 17: "Verdadero", 18: "Falso", 19: "Falso", 20: "Verdadero"
};

let lines = input_text.split(/\r?\n/);
let questions = [];
let current_q = null;
let is_second_part = false;

for (let line of lines) {
    line = line.trim();
    if (!line) continue;
    
    let m = line.match(/^(\d+)\.\s*(.*)/);
    if (m) {
        if (current_q) {
            questions.append ? questions.push(current_q) : questions.push(current_q);
        }
        let q_num = parseInt(m[1]);
        if (q_num === 1 && questions.length >= 60) {
            is_second_part = true;
        }
        
        current_q = {
            q: m[2],
            a: [],
            c: 0,
            q_num: q_num,
            part: is_second_part ? 2 : 1
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
    let part = q.part;
    let num = q.q_num;
    let ans = part === 2 ? answers61_80[num] : answers1_60[num];
    
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

fs.writeFileSync('economia_bank.json', JSON.stringify(final_q, null, 2), 'utf8');
