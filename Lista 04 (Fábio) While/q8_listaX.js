const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

     const numero_x = Number(prompt('Insira um número: '))

     let anterior = numero_x
     let atual = Number(prompt('Insira um número: '))
    let soma = anterior + atual

     while (soma != numero_x){
     const numero = Number(prompt('Insira um número: '))
     anterior = atual
     atual = numero
     soma = atual + anterior
}
}

main()