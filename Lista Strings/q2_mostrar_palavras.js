const prompt = require('prompt-sync')()

//Recebendo Dados

function main(){
    
    const frase = prompt('Insira uma frase: ')

    palavra_separada_p_linha(frase)

}

function palavra_separada_p_linha(frase){

    let caractere = ''
    let palavra_separada = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]

        if(caractere === ' '){
            palavra_separada += '\n'

        }else{
            palavra_separada += caractere
            
        }
    }
    console.log(palavra_separada)
}

main()