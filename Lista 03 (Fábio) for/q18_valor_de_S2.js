const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let num = Number(prompt('Número: '))

    let s = 0
    let acrescimo = 0

    for(i = 1; i <= num; i++){

        s = s + (i)/(num - acrescimo)

        console.log(s)
        acrescimo++
    }

    console.log(`Resultado: S = ${s.toFixed(4)}`)

}

main()