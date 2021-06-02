const prompt = require('prompt-sync')();

//Entrada
const raio = Number(prompt('Insira o valor do raio:'))


//Calculando o volume da esfera

const raioa3 = (raio * raio * raio)
const volumei = ( 4 * 3.14 * raioa3)
const volume = volumei / 3

//Saída 

console.log('O volume da esfera é ',volume)