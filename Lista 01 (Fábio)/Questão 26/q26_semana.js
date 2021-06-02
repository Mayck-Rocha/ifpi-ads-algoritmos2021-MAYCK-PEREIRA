const prompt = require('prompt-sync')();

// Entrada

const dias = Number(prompt('Insira o valor em dias: '))

// convertendo de dias para semanas 

const semana = Math.trunc(dias / 7)
const d = dias - (semana * 7)

// Saida

console.log(dias, 'dias, equivalem a', semana, 'semanas(s) e', d , 'dia(s)')