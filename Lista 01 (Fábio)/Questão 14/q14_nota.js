const prompt = require('prompt-sync')();

//Entrada

const media1 = Number(prompt('Insira a nota 1: '))
const peso1 = Number(prompt('Insira o peso da nota 1: '))
const media2 = Number(prompt('Insira a nota 2: '))
const peso2 = Number(prompt('Insira o peso da nota 2: '))
const media3 = Number(prompt('Insira a nota 3: '))
const peso3 = Number(prompt('Insira o peso da nota 3: '))

//Calculando a média ponderada

const mediaponderada = ((media1 * peso1) + (media2 * peso2) + (media3 * peso3) / (peso1) + (peso2) + (peso3)).toFixed(3)

//Saída

console.log('A media ponderada é:',mediaponderada)

