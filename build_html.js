const fs = require('fs');

const procesos_html = fs.readFileSync('evaluacion-procesos.html', 'utf8');
const economia_bank = fs.readFileSync('economia_bank.json', 'utf8');

let new_html = procesos_html;

// 1. Title
new_html = new_html.replace(
    '<title>Evaluación: Procesos Productivos - 5to A</title>',
    '<title>Evaluación: La Ciencia Económica - 6to B</title>'
);

// 2. Header
new_html = new_html.replace(
    '<h1>Procesos Productivos</h1>',
    '<h1>La Ciencia Económica</h1>'
);
new_html = new_html.replace(
    '<p>Evaluación de Diagnóstico · 5to Año "A"</p>',
    '<p>Evaluación Múltiple Choice · 6to Año "B"</p>'
);

// 3. Setup screen text
new_html = new_html.replace(
    'Esta evaluación consta de 10 preguntas seleccionadas al azar de un banco de 30. Tenés 10 minutos para completar.',
    'Esta evaluación consta de 15 preguntas seleccionadas al azar de un banco de 80. Tenés 15 minutos para completar.'
);

// 4. Timer
new_html = new_html.replace(
    'let timeLeft = 10 * 60; // 10 minutes',
    'let timeLeft = 15 * 60; // 15 minutes'
);
new_html = new_html.replace(
    '<span id="timer-val">10:00</span>',
    '<span id="timer-val">15:00</span>'
);

// 5. Time used calculation
new_html = new_html.replace(
    'const timeUsed = 10 * 60 - timeLeft;',
    'const timeUsed = 15 * 60 - timeLeft;'
);

// 6. Questions logic 
new_html = new_html.replace(
    'currentQuestions = shuffle([...questionBank]).slice(0, 10);',
    'currentQuestions = shuffle([...questionBank]).slice(0, 15);'
);
new_html = new_html.replace(
    'userAnswers = new Array(10).fill(null);',
    'userAnswers = new Array(15).fill(null);'
);
new_html = new_html.replace(
    'const progress = ((currentIdx + 1) / 10) * 100;',
    'const progress = ((currentIdx + 1) / 15) * 100;'
);
new_html = new_html.replace(
    '<span class="q-number">Pregunta ${currentIdx + 1} de 10</span>',
    '<span class="q-number">Pregunta ${currentIdx + 1} de 15</span>'
);
new_html = new_html.replace(
    'document.getElementById(\'page-indicator\').textContent = `${currentIdx + 1} de 10`;',
    'document.getElementById(\'page-indicator\').textContent = `${currentIdx + 1} de 15`;'
);
new_html = new_html.replace(
    'if (currentIdx < 9) {',
    'if (currentIdx < 14) {'
);
new_html = new_html.replace(
    'const isLast = currentIdx === 9;',
    'const isLast = currentIdx === 14;'
);
new_html = new_html.replace(
    '<div id="page-indicator" style="color: var(--text-muted); font-size: 14px; font-weight: 600;">1 de 10</div>',
    '<div id="page-indicator" style="color: var(--text-muted); font-size: 14px; font-weight: 600;">1 de 15</div>'
);
new_html = new_html.replace(
    'document.getElementById(\'summary-total\').textContent = `${userAnswers.filter(a => a !== null).length}/10`;',
    'document.getElementById(\'summary-total\').textContent = `${userAnswers.filter(a => a !== null).length}/15`;'
);
new_html = new_html.replace(
    '<span id="summary-total">10/10</span>',
    '<span id="summary-total">15/15</span>'
);

// 7. Supabase saving logic
new_html = new_html.replace(
    'materia: "Procesos Productivos",',
    'materia: "Economía", // o "La Ciencia Económica"'
);
new_html = new_html.replace(
    'unidad: "Evaluación 30",',
    'unidad: "Evaluación MC", // para que el panel docente lo reconozca'
);
new_html = new_html.replace(
    'nota: score * 10,',
    'nota: Math.round((score / 15) * 100),'
);
new_html = new_html.replace(
    'nota: (score * 10) + "/100",',
    'nota: Math.round((score / 15) * 100) + "/100",'
);
new_html = new_html.replace(
    'score + "/10"',
    'score + "/15"'
);
new_html = new_html.replace(
    '"Evaluación": "Procesos Productivos",',
    '"Evaluación": "La Ciencia Económica",'
);
new_html = new_html.replace(
    /if \(score >= 6\) \{/,
    'if (score >= 9) {'
);
new_html = new_html.replace(
    /materia=eq\.Procesos%20Productivos/g,
    'materia=eq.Economía'
);

// 8. Students Array Replacement
const students_str = `    const students = [
        { name: "CABALLERO, AGUSTIN", code: "milan" },
        { name: "CHELIA, CANDELA ABIGAIL", code: "florence" },
        { name: "ECHANIZ ONTIVEROS, LUCAS JEREMÍAS", code: "venice" },
        { name: "FRETES, YÉSICA", code: "naples" },
        { name: "POLLINI, JUAN JOSÉ", code: "seattle" },
        { name: "SANTUCHO, SIMON", code: "houston" },
        { name: "VALETTI, VÍCTOR ORLANDO", code: "chicago" },
        { name: "PROFE 1", code: "profe1" },
        { name: "PROFE 2", code: "profe2" }
    ];`;

new_html = new_html.replace(
    /const students = \[[\s\S]*?\];/,
    students_str
);

// 9. Question Bank Replacement
new_html = new_html.replace(
    /const questionBank = \[[\s\S]*?\];/,
    `const questionBank = ${economia_bank};`
);

fs.writeFileSync('evaluacion-economia.html', new_html, 'utf8');
