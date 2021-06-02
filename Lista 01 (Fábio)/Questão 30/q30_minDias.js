const prompt = require('prompt-sync')();

// Entrada

const minutos = Number(prompt('Insira o valor em minutos: '))

// convertendo de minutos para dias 

const dias = Math.trunc(minutos / 1440)
const horas = Math.trunc((minutos - (dias * 1440)) / 60)
const min = minutos - (dias * 1400) - (horas * 60)

// Saida

console.log(minutos,'minutos equivalem a',dias,'dias,',horas,'horas e',min,'minutos')