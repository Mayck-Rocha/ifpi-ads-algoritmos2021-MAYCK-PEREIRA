const prompt = require('prompt-sync')();

// Entrada

const numero = prompt('Insira um número com 3 dígitos: ')

//Calculando a soma do inverso

const inverso = numero[2]+numero[1]+numero[0]
const soma = parseInt(numero) + parseInt(inverso)

console.log('A soma pelo inverso do número',numero,'é igual a',soma)