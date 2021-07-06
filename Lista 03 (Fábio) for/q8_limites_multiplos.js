const prompt = require('prompt-sync')()

function main(){

    let num = Number(prompt('Insira um número: '))
    let limite_inferior = Number(prompt('Insira o limite inferior: '))
    let limite_superior = Number(prompt('Insira o limite superior: '))

    let resultado = limite_inferior

    for(let i = 1; resultado < limite_superior ; i++){

        resultado = num * i
        
        console.log(`Mútiplo do número ${num}: ${resultado}`)
        
    }


}



main()