const pdfsig = require('pdfsig');
const firmas = new pdfsig('file.pdf');
const nroFirmas = firmas.size();
console.log(nroFirmas);
console.log(`Hello Node.js`);
