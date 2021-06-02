const prompt = require('prompt-sync')()

//Entrada 
const VelocidadeKm = Number(prompt('Velocidade em Km:'))

//Processamento
const VelocidadeMs = VelocidadeKm / 3.6

//Saída
console.log('A velocidade em Km',VelocidadeKm,', é igual a',VelocidadeMs, 'Ms')