const prompt = require('prompt-sync')();

// Entrada

const anos = Number(prompt('Insira a quantidade de anos: '))
const meses = Number(prompt('Insira a quantidade de meses: '))
const dias = Number(prompt('Insira a quantidade de dias: '))

// Convertendo os dados em dias

const idadeDias = (anos * 365) + (meses * 30) + dias

// Saida

console.log('A idade em dias é equivalente a: ', idadeDias)