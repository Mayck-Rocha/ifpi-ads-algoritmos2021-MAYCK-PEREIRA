const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const frase = prompt('Insira uma frase: ')
    let quantidade = 1
    
    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        
        if(caractere === ' ' ){
            quantidade++
        }else{ }
    }
    console.log(`A frase possui ${quantidade} palavra(s)`)
}

main()