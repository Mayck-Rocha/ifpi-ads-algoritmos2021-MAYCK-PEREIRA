const prompt = require('prompt-sync')()

//Recebendo Dados

function main(){

 const frase = prompt('Insira uma frase: ')

 retirar_espaço(frase)
}

function espaço(caractere){
    let codigo = caractere.charCodeAt(0)
    if(codigo === 32){
        return true
    }else{
        return false
    }

}

function retirar_espaço(frase){
    let nova_frase = ''
    let caractere = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(espaço(caractere)){
            continue
        }else{
            nova_frase += caractere
        }
    }

    console.log(nova_frase)
}
main()

