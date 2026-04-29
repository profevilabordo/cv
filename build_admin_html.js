const fs = require('fs');

const procesos_html = fs.readFileSync('evaluacion-procesos.html', 'utf8');
const admin_bank = fs.readFileSync('admin_bank.json', 'utf8');

let new_html = procesos_html;

// 1. Title
new_html = new_html.replace(
    '<title>Evaluación: Procesos Productivos - 5to A</title>',
    '<title>Evaluación: Los RRHH - 5to D</title>'
);

// 2. Header
new_html = new_html.replace(
    '<h1>Procesos Productivos</h1>',
    '<h1>Los RRHH</h1>'
);
new_html = new_html.replace(
    '<p>Evaluación de Diagnóstico · 5to Año "A"</p>',
    '<p>Evaluación Múltiple Choice · 5to Año "D"</p>'
);

// 3. Setup screen text
new_html = new_html.replace(
    'Esta evaluación consta de 10 preguntas seleccionadas al azar de un banco de 30. Tenés 10 minutos para completar.',
    'Esta evaluación consta de 10 preguntas seleccionadas al azar de un banco de 30. Tenés 12 minutos para completar.'
);

// 4. Timer
new_html = new_html.replace(
    'let timeLeft = 10 * 60; // 10 minutes',
    'let timeLeft = 12 * 60; // 12 minutes'
);
new_html = new_html.replace(
    '<span id="timer-val">10:00</span>',
    '<span id="timer-val">12:00</span>'
);

// 5. Time used calculation
new_html = new_html.replace(
    'const timeUsed = 10 * 60 - timeLeft;',
    'const timeUsed = 12 * 60 - timeLeft;'
);

// 6. Supabase saving logic
new_html = new_html.replace(
    'materia: "Procesos Productivos",',
    'materia: "Administración III",'
);
new_html = new_html.replace(
    'unidad: "Evaluación 30",',
    'unidad: "Evaluación MC",'
);
new_html = new_html.replace(
    '"Evaluación": "Procesos Productivos",',
    '"Evaluación": "Los RRHH",'
);
new_html = new_html.replace(
    /materia=eq\.Procesos%20Productivos/g,
    'materia=eq.Administración%20III'
);

// 7. Students Array Replacement
const students_str = `    const students = [
        { name: "CARRUEGO, ISIS JAZMIN", code: "montevideo" },
        { name: "CONTRERAS, MALENA VALENTINA", code: "asuncion" },
        { name: "DIAZ, JOAQUIN BRIAN", code: "lapaz" },
        { name: "FALCÓN, BRUNELA LAUREANA", code: "panama" },
        { name: "GEUNA, LARA", code: "managua" },
        { name: "GOMEZ MADERO, DARÍO JOAQUÍN", code: "tegucigalpa" },
        { name: "GUILLEN, SOFÍA ELIZABETH", code: "kingston" },
        { name: "LEIVA, EMANUEL OSVALDO", code: "nassau" },
        { name: "MORELLO, CONSTANZA JAZMIN", code: "moscow" },
        { name: "PACE, MARTÍN DAVID", code: "beijing" },
        { name: "PAULOSKI, NAIARA GUADALUPE", code: "jakarta" },
        { name: "RIOS, MORENA AILÉN", code: "barcelona" },
        { name: "PROFE 1", code: "profe1" },
        { name: "PROFE 2", code: "profe2" }
    ];`;

new_html = new_html.replace(
    /const students = \[[\s\S]*?\];/,
    students_str
);

// 8. Question Bank Replacement
new_html = new_html.replace(
    /const questionBank = \[[\s\S]*?\];/,
    `const questionBank = ${admin_bank};`
);

fs.writeFileSync('evaluacion-admin.html', new_html, 'utf8');
