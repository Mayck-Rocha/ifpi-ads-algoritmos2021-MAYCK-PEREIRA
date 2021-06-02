const prompt = require('prompt-sync')()

//Entrada 
const minutos = Number(prompt('Valor em minutos:'))

//Processamento
const horas_min = minutos / 60
const h_minutos = minutos % 60 

//Saída 
console.log(minutos,'minutos equivalem a', horas_min,'horas e',h_minutos,'minutos')