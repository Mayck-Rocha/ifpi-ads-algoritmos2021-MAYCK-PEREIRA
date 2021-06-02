const prompt = require('prompt-sync')();

// Entrada

const num1 = prompt('Insira o 1° número: ')
const num2 = prompt('Insira o 2° número: ')
const num3 = prompt('Insira o 3° número: ')

//Calculando a média dos números

const média = ((num1+num2+num3) / 3).toFixed(2)

console.log('A média dos números',num1,',',num2,'e',num3,'é igual a',média)