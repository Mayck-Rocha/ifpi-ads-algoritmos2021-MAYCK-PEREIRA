const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const frase = prompt('Insira uma frase que tenha algum algarismo: ')

    const frase_final = resultado(frase)

    console.log(frase_final)
}

function resultado(frase){
    let caractere = ''
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(e_algarismo(caractere)){
            nova_frase = nova_frase + substituicao_do_algarismo(caractere)
        }else{
            nova_frase = nova_frase + caractere
        }
    }
    return nova_frase
}

function e_algarismo(caractere){
    const codigo = caractere.charCodeAt(0)
    
    if(codigo >= 48 && codigo <= 57){
        return true
    }else{
        return false
    }

}

function substituicao_do_algarismo(caractere){
    const codigo = caractere.charCodeAt(0)
    let algarismo_extenso = ''

    if(codigo === 48){
        algarismo_extenso = 'zero'
    }else if(codigo === 49){
        algarismo_extenso = 'um'
    }else if(codigo === 50){
        algarismo_extenso = 'dois'
    }else if(codigo === 51){
        algarismo_extenso = 'três'
    }else if(codigo === 52){
        algarismo_extenso = 'quatro'
    }else if(codigo === 53){
        algarismo_extenso = 'cinco'
    }else if(codigo === 54){
        algarismo_extenso = 'seis'
    }else if(codigo === 55){
        algarismo_extenso = 'sete'
    }else if(codigo === 56){
        algarismo_extenso = 'oito'
    }else if(codigo === 57){
        algarismo_extenso = 'nove'
    }
    return algarismo_extenso

}

main()