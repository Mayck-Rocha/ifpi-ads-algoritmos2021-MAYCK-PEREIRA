const prompt = require ('prompt-sync')()

function main(){
     
    const num1 = Number(prompt('Insira o primeiro número: '))
    const num2 = Number(prompt('Insira o segundo número: '))
    const num3 = Number(prompt('Insira o terceiro número: '))

    if(eh_igual(num1, num2, num3)){
        console.log('Três Números iguais')
    }else if(num1 === num2){
        console.log('Dois Números iguais')
    }else if(num2===num3){
        console.log('Dois Números iguais')
    }else if(num1===num3){
        console.log('Dois Números iguais')
    }else{
        console.log('Nenhum Número igual')
    }

}
function eh_igual(valor1, valor2, valor3){
    return (valor1===valor2) && (valor1 === valor3)

}

main() 