const prompt = require('prompt-sync')()

// Entrada

const x1 = prompt('ponto 1(x):')
const y1 = prompt('ponto 1(y):')

const x2 = prompt('ponto 2(x):')
const y2 = prompt('ponto 2(y):')

// Calculando a distância entre os pontos

const distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2).toFixed(3)

// Saída
console.log('A distância entre os pontos é igual a: ', distancia)