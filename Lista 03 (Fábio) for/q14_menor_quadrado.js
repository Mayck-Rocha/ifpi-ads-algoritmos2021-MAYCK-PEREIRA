const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let N = Number(prompt('Insira um número N: '))

    let quadrado = 1

    for(let i = quadrado; i <= N; i = i + Math.pow(i, 2) ){

        quadrado = i * i
    }

    console.log(`O quadrado próximo a ${N} é ${quadrado}`)

}

main()