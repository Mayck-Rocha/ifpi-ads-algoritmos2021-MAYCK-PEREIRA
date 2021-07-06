const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let num = Number(prompt('Insira a quantidade de números da lista: '))
    let soma = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(prompt('Número: '))

        soma = soma + numero
    }

    let media = soma / num

    console.log(`A soma dos números da lista é  ${soma}`)
    console.log(`A media dos números da lista é ${media}`)

}

main()