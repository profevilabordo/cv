const fs = require('fs');
const pdf = require('pdf-parse');

const pdfFile = 'pdfs/Apunte_U2_MarcoJuridico_5A_6B (1).pdf';
let dataBuffer = fs.readFileSync(pdfFile);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_output.txt', data.text);
    console.log('PDF text extracted to pdf_output.txt');
}).catch(function(error) {
    console.error('Error reading PDF:', error);
});
