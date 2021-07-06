const prompt = require('prompt-sync')()

// Recebendo dados

function main(){
    let num = Number(prompt('Insira um número: '))
    let calculo = 0

    for(let i = num - 1 ; i > 1 ; i--){

        calculo += i
    }

    console.log(`A soma entre 1 e ${num} é igual a ${calculo}`)

}

main()