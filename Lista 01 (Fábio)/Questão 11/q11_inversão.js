const prompt = require('prompt-sync')();

// Entrada
const numero = prompt('Insira o número inteiro com 3 calgarismos:')

// Processamneto (Invertendo o número)

const inverso = numero[2] + numero[1] + numero[0]


// Saida
console.log('O inverso do número', numero, 'é', inverso)