const prompt = require('prompt-sync')()

//Entrada
const velocidade_ms = Number(prompt('Velocidade (m/s):'))

//Processamento
const velocidade_km = velocidade_ms * 3.6

//Saída
console.log('A Velocidade', velocidade_ms, 'm/s')
console.log('É igual a',velocidade_km, 'km/h')