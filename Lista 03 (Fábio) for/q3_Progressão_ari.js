const prompt = require('prompt-sync')()

//Recebendo dados
function main(){

const A0 = Number(prompt('Insira o valor inicial: '))
const limite = Number(prompt('Insira o limite: '))
const razao = Number(prompt('Insira a razão: '))

for(inicio = A0; limite >= inicio; inicio = inicio + razao){
    console.log(inicio)
}
}
main()