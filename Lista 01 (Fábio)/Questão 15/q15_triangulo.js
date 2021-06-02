const prompt = require('prompt-sync')();

//Entrada
const base = Number(prompt('Insira o valor da base: '))
const altura = Number(prompt('Insira o valor da altura: '))

//Calculo da área do triângulo

const área1 = base * altura 
const área2 = área1 / 2

//Saída 

console.log('A ára do triângulo é ',área2)