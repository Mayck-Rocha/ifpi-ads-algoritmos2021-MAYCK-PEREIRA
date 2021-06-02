const prompt = require('prompt-sync')();

// Entrada

const metros = Number(prompt('Insira a quantia metros: '))

// Convertendo metros para quilômetros

const km = Math.trunc(metros / 1000)
const m = metros - (km * 1000)

// Saida

console.log(metros, 'metros equivalem a', km, 'km e', m , 'metros')