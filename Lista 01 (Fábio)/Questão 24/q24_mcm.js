const prompt = require('prompt-sync')();

//Entrada
const m = Number(prompt('Insira o valor em metros:'))

//Convertendo o valor de m para cm

const cm = m * 100

//Saída 

console.log('O valor',m,'em metros é igual a',cm,'centímetro(s)')