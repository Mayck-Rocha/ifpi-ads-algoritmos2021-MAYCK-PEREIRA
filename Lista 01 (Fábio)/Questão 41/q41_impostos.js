const prompt = require('prompt-sync')()

//Entrada

const fábrica = Number(prompt('insira va lor de fábrica do veículo: R$ '))

//Processamento
const distribuidor = fábrica * 0.28
const impostos = fábrica * 0.45
const custoConsumidor = (fábrica + distribuidor + impostos)

//Saída
console.log('O valor do veículo para o consumidor é um total de R$', custoConsumidor)