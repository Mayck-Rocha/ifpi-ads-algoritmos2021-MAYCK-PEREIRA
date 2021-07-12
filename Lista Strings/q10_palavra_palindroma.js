const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const palavra = prompt('Insira uma palavra: ')

    let nova_palavra = ''

    let caractere = ''

    for(let i = palavra.length - 1; i >= 0; i--){
        caractere = palavra[i]
        nova_palavra = nova_palavra + caractere
    }
   
    if(palavra === nova_palavra){
        console.log(`A palavra '${palavra}' é palíndroma `)
    }else{
        console.log(`A palavra '${palavra}' não é palíndroma`)
    }

}

main()