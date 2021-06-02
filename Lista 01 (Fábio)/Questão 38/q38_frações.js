const prompt = require('prompt-sync')();

// Entrada

const num1 = Number(prompt('Insira o numerador da fração 1: '))
const den1 = Number(prompt('Insira o denominador da fração 1: '))
const num2 = Number(prompt('Insira o numerador da fração 2: '))
const den2 = Number(prompt("Insira o denominador fração 2: "))

//Somando as frações

const numerador = (num1 * den1) + (num2 * den2)
const denominador = den1 * den2

//Saída
console.log(num1,'/',den1,'+',num2,'/',den2,'=',numerador,'/',denominador)