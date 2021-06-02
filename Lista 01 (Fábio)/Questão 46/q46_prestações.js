const prompt = require('prompt-sync')()

//Entrada

const merc = Number(prompt('Insira o valor do produto R$ '))

//Calculando as prestações

const entrada = (Math.trunc(merc / 3) + (merc  %  3))
const prestacao = ((merc - entrada) / 2)

//Saída

console.log('Uma mercadoria com o valor de R$',merc, ', terá uma entrada de R$',entrada, 'e duas prestações de', 'R$',prestacao,'cada uma')
