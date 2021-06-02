const prompt = require('prompt-sync')();

//Entrada
const raio = Number(prompt('Insira o valor do raio:'))


//Calculo do comprimento da circunferência

const comprimento = (2 * 3.14 * raio).toFixed(2)

//Saída 

console.log('O comprimento da circunferência é ',comprimento)