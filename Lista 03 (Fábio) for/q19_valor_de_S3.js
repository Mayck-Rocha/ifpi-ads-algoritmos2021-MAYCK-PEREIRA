const prompt = require('prompt-sync')()

//Recebendo

function main(){
    let num = Number(prompt('Número: '))

    let s = 0
    let acrescimo = 0

    for(i = 1; i <= num; i++){

        s = s + i/(num - acrescimo) - (num - (acrescimo + 1))/ (i + 1)

        acrescimo++
    }

    console.log(`Resultado: S = ${s.toFixed(1)}`)


}

main()