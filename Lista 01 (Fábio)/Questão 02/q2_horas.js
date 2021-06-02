const prompt = require('prompt-sync')()

//Entrada 
const horas = Number(prompt('Valor em horas:'))

//Processamento
const minutos = horas * 60 

//Saída 
console.log(horas,'horas são', minutos,'minutos')
