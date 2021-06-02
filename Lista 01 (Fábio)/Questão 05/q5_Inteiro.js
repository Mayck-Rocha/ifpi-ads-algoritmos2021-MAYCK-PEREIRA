const prompt = require('prompt-sync')();

// Entrada

const Numero = Number(prompt('Número com três casas Decimais:'))

 
// Processamento
const unidade = Math.trunc(numeros_3dig / 100)
const dezena = Math.trunc((numeros_3dig - (unidade * 100)) / 10)
const centena = Numero - ((unidade * 100) + (dezena * 10))
const soma = unidade + dezena + centena


//Saída
console.log('O número de três digitos foi:', numero)
console.log('A soma de'),unidade,'+',Dezena,'+',Centena,'é igual a',soma