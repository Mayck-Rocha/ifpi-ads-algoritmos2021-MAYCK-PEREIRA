const prompt = require ('prompt-sync')()

function main(){

    const num = Number(prompt('Insira um número de dois dígitos: '))

    if(IgualdadeDiferença(num)){
        console.log('Os algarismos são iguais')
    }else{
        console.log('Os algarismos são diferentes')
    }

}

function IgualdadeDiferença(valor){
    const dezena = Math.trunc(valor / 10)
    const unidade = valor % 10
    return dezena === unidade
}

main()