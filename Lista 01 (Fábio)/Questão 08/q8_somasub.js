const prompt = require('prompt-sync')()

//Entrada
const num1 = Number(prompt('Primeiro número: '))
const num2 = Number(prompt('Segundo número: '))

//Processamento
const soma = num1 + num2
const subtração = num1 - num2
const divisão = soma / subtração

//Saída 
console.log('O resultado da divisão entre as operações é', divisão)
