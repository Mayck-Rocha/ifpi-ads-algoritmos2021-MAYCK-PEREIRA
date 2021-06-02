const prompt = require('prompt-sync')();

//Entrada
const km = Number(prompt('Insira o valor em Km:'))

//Convertendo o valor de km para m

const m = km * 1000

//Saída 

console.log('O valor',km,'em Km é igual a ', m, 'metros')
