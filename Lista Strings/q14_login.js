const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

    const nome = prompt('Insira um nome: ')

    let caractere = ''

    for(i = 0; i < nome.length; i++){
        caractere = nome[i]
        if(caractere == ' '){
            caractere = nome[i + 1]
            continue
        
        }
           
    }
}
main()