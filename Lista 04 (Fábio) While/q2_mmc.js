const prompt = require('prompt-sync')()

//Recebendo os valores

function main(){

const num1 = Number(prompt('Insira o 1º número: '))
const num2 = Number(prompt('Insira o 2º número: '))

//Calculando o MMC

let numero = 1

while(!(numero % num1 === 0 && numero % num2 === 0)){
numero++
}
console.log(`O MMC de ${num1} e ${num2} é ${numero} `)
}
main()