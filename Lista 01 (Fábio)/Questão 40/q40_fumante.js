const prompt = require('prompt-sync')()

// Entrada

const anos = prompt('Insira a quantidade de anos: ')
const cigarros = prompt('Insira a quantidade de cigarros por dia: ')
const valor = prompt('Insira o valor do cigarro: ')

// Processamento

const gastos = (((cigarros * (anos * 365))/20) * valor).toFixed(3)

// Saída

console.log('O valor em carteiras de cigarros é : R$:', gastos)
