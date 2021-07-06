const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    let num = Number(prompt('Insira a quantidade de números da lista: '))
    let maior = 0

    for(i = 1; i <= num ; i++){
        let numero = Number(prompt('Número: '))

        if(numero > maior){
            maior = numero
        }
    }
    console.log(`O maior número da lista é ${maior}`)

}

main()