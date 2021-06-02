const prompt = require('prompt-sync')()

//Entrada

const num1 = Number(prompt('Insira o primeiro número'))
const num2 = Number(prompt('Insira o segundo número'))

//Calculando o resultado do quociente e o resto

const qd = Math.trunc(num1 / num2)
const rd =  num1 % num2

//Saída 

console.log('O quociente da divisão é',qd, 'e o resto é',rd)
