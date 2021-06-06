const prompt = require('prompt-sync')()

function main(){

    const opcao = Number(prompt('Insira um número de 1 a 3: '))
    const num1 = Number(prompt('Insira o primeiro número: '))
    const num2 = Number(prompt('insira o segundo número: '))
    const num3 = Number(prompt('Insira o terceiro número: '))


    if(opcao === 1){
        console.log(num1)
    }else if(opcao === 2){
        console.log(num2)
    }else if(opcao === 3){
        console.log(num3)
    }

}
main() 