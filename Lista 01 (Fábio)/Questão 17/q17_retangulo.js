const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Insira o valor da base: '))
const altura = Number(prompt('Insira o valor da altura: '))

//Calculo da área do retângulo

const área = base * altura 

//Saída 

console.log('A ára do retângulo é ',área)