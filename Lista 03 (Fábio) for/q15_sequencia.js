const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let num = Number(prompt('Número N: '))

    let acrescimo = 1

    for(let i = 1; i <= num; i = i + acrescimo ){

        console.log(i)
        acrescimo++

    }

}

main()