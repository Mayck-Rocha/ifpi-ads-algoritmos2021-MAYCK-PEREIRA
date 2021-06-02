const prompt = require('prompt-sync')();

//Entrada
const salário = Number(prompt('Insira o salário do trabalhador:'))

//Aumento do salário (25%)
const aumento = salário * 0.25 
const salarioFinal = salário + aumento

//Saída
console.log('O aumento de um salario inicial de ',salário,',passou a ser',salarioFinal)