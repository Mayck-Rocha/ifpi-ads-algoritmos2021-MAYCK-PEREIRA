const prompt = require('prompt-sync')();

//Entrada
const Kg = Number(prompt('Insira o valor em Kg:'))

//Convertendo o valor de kg para g

const g = Kg * 1000

//Saída 

console.log('O valor',Kg,'em Kg é igual a',g,'grama(s)')