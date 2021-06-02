const prompt = require('prompt-sync')()

// Entrada
const num1 = Number(prompt('Insira o primeiro número:')) 
const num2 = Number(prompt('Insira o segundo número:')) 
const num3 = Number(prompt('Insira o terceiro número:')) 

// Processamento
const soma = num1 + num2 
const subtração = num2 - num3

//Saída 

console.log('A soma é:',soma)
console.log('A subtração é:',subtração)



