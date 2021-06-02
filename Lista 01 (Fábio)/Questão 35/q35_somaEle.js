  
const prompt = require('prompt-sync')();

// Entrada

const número = prompt('Insira um número de 4 digitos: ')

// Somando os elementos

const soma = (parseInt(número[0])) + parseInt(número[1]) + parseInt(número[2]) + parseInt(número[3])

// Saida
console.log('A soma dos quatro algarismos equivale a: ', soma)