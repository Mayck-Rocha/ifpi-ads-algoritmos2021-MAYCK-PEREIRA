const prompt = require('prompt-sync')();

//Entrada

const valor = Number(prompt('Insira o valor inicial em R$:'))

// Calculando 70% desse valor
const porcentagem = valor * 0.7

//Saída

console.log('O valor inicial de R$: ', valor,',passou a ser',porcentagem)

