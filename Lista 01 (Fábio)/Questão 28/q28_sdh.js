const prompt = require('prompt-sync')();

// Entrada

const horas = Number(prompt('Insira o valor em horas: '))

// convertendo de horas para semanas

const semana = Math.trunc(horas / 168)
const dia = Math.trunc((horas -(semana * 168)) / 24)
const hora = horas - (semana * 168) - (dia * 24) 

// Saida

console.log(horas,'horas equivalem a',semana,'semana(s),',dia,'dias e',hora,'horas')