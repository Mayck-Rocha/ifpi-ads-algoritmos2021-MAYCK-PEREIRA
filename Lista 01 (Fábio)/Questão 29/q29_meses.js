const prompt = require('prompt-sync')();

// Entrada

const meses = Number(prompt('Insira o valor em meses: '))

// convertendo de meses para anos

const anos = Math.trunc(meses / 12)
const m = meses - (anos * 12)

// Saida

console.log(meses, 'meses, equivalem a', anos, 'ano(s) e', m , 'meses')