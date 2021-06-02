const prompt = require('prompt-sync')()

//Entrada

const valorDosaque = Number(prompt('Insira o valor do saque: R$ '))

//Critério de distribuição ótima

const notas50 = Math.trunc(valorDosaque / 50)
const notas10 = Math.trunc((valorDosaque % 50) / 10)
const notas5 = Math.trunc((valorDosaque % 10) / 5)
const notas1 = (valorDosaque % 5)

//Saída

console.log('Sacando', valorDosaque, ',a quantidade de notas e seus valores são; ', notas50, 'notas de R$ 50,', notas10, 'notas de R$ 10,', notas5, 'notas de R$ 5 e', notas1, 'de R$ 1')