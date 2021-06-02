const prompt = require('prompt-sync')();

// Entrada

const A = Number(prompt('Insira um valor para A: '))
const B = Number(prompt('Insira um valor para B: '))
const C = Number(prompt('Insira um valor para C: '))

//Calculando as operações

const R = Math.pow(( A + B) , 2)
const S = Math.pow((B + C) , 2)
const D = ((R + S) / 2)

//Saída

console.log('O resultado da operação é',D)
