const prompt = require('prompt-sync')()

//Recebendo Valores

function main(){

let numN = Number(prompt('Insira um número N: '))
let numX = Number(prompt('Insira um número X: '))

let resul = 0

//Divisões

    while(numX > 2){
     resul = numN / numX

     console.log(`${numN} dividido pra ${numX} é igual a ${resul.toFixed(1)} `)

     numN = numN / numX
     numX = numX - 1
    }
}
main()
