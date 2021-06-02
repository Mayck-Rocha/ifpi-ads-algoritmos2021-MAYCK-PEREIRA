const prompt = require('prompt-sync')();

// Entrada

const segundos = Number(prompt('Insira o valor em segundos: '))

// convertendo de segundos para horas 

const h = Math.trunc(segundos / 3600)
const m = Math.trunc((segundos - (h * 3600)) / 60)
const s = segundos - (h * 3600) - (m * 60)

// Saida

console.log(segundos,'segundos equivalem a',h,'horas,',m,'minutos e',s,'segundos')