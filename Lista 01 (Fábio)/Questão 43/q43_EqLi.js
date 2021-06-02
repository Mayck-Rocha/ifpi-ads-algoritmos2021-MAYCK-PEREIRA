  
const prompt = require('prompt-sync')()

//Entradas

const valorA = Number(prompt('Insira o valor de A: '))
const valorB = Number(prompt('Insira o valor de B: '))
const valorC = Number(prompt('Insira o valor de C: '))
const valorD = Number(prompt('Insira o valor de D: '))
const valorE = Number(prompt('Insira o valor de E: '))
const valorF = Number(prompt('Insira o valor de F: '))

//Processamento

const valorx = (((valorC * valorE) - (valorB * valorF)) / ((valorA * valorE) - (valorB * valorD))).toFixed(3)
const valory = (((valorA * valorF) - (valorC * valorD)) / ((valorA * valorE) - (valorB * valorD))).toFixed(3)

//Saída

console.log('O coeficiente de X é igual a: ', valorx, 'e o de Y: ', valory)