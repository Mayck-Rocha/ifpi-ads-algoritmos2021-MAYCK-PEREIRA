const prompt = require('prompt-sync')()

// ENTRADA

const Dolar = Number(prompt('Valor em Dolar:'))

// Processamento 

const Real = Dolar * 5.25

//Saída 

console.log('$', Dolar, 'Dolar/Dolares, equivalem a R$:', Real,'Real/Reais')