const prompt = require ('prompt-sync')()

function main(){

    const num1 = Number(prompt('Insira o primeiro número: '))
    const num2 = Number(prompt('Insira o segundo número: '))
    const num3 = Number(prompt('Insira o terceiro número: '))

    if(maior(num1, num2, num3)){
        console.log(num1,'é o maior número')
    }else if(maior(num2,num1,num3)){
        console.log(num2,'é o maior número')
    }else{ 
        console.log(num3,'é o maior número')
    }


}

function maior(valor1,valor2,valor3){
    return (valor1 > valor2) && (valor1 > valor3)
}


main() 