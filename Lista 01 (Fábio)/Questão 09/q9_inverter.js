const prompt = require('prompt-sync')()

//Entrada

const num = Number(prompt('Insira os números'))

//Processamento

const num1 = Math.trunc(num / 10)
const num2 = num - (num1 * 10)
const inverso = (num2 * 10) + num1

//Saída 

console.log('O inverso do número', num,'é igual a:', inverso)