const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

 const numero = Number(prompt('Insira número qualquer: '))

 let lista = 0

//Para números positivos

    while(numero >= 0 && numero != lista){
        lista++

        console.log(lista)
    }if(numero === lista){
        console.log(`O número ${numero} foi encontrado`)
    }
//para números negativos

    while(numero <= 0 && numero != lista){
        lista--

        console.log(lista)
    }if(numero === lista){
        console.log(`O número ${numero} foi encontrado`)
    }
       
}
main()