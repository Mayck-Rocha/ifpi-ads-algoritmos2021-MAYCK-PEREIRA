  
const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let num = Number(prompt('Número: '))

    let s = 0
    let acrescimo = 0

    for(i = 1; i <= num; i++){

        s = s + (1 / (i + acrescimo)) - (1/ (i + 1 + acrescimo))
        console.log(s)

        acrescimo++
    }

    console.log(`Resultado: S = ${s.toFixed(5)}`)


}

main()