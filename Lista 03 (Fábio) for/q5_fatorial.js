const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

    let num = Number(prompt('Insira um número: '))

    let calculo = 1

    for(let i = num ; i > 0 ; i--){
        calculo = calculo * i

    }

    console.log(`${num}!(Fatorial) é ${calculo}`)

}

main()