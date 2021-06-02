
const prompt = require('prompt-sync')()

//Entrada

const latao = Number(prompt('Insira a quantidade de latão em kg: '))

//Calculando as quantidades

const cobre = (latao * 0.7)
const zinco = (latao * 0.3)

//Saída

console.log(latao, 'Kg de latão', 'corresponde a', cobre, 'Kg de cobre e', zinco, 'Kg de zinco')