const prompt = require('prompt-sync')()

function main(){
    
    const num1 = Number(prompt('Insira o primeiro número : '))
    const num2 = Number(prompt('Insira o segundo número : '))
    const num3 = Number(prompt('Insira o terceiro número : '))
    const num4 = Number(prompt('Insira o quarto número : '))
    const num5 = Number(prompt('Insira o quinto número : '))
    

    const media = (num1 + num2 + num3 + num4 + num5) / 5   // Média dos números
    if(console.log(`A média dos números é ${media}`)){
        
    }

    if(num1 > media){
       console.log(`O número ${num1} é maior que a média`)
    }

    if(num2 > media){
        console.log(`O número ${num2} é maior que a média`)
    }
    
    if(num3 > media){
        console.log(`O número ${num3} é maior que a média`)
    }

    if(num4 > media){
        console.log(`O número ${num4} é maior que a média`)
    }

    if(num5 > media){
        console.log(`O número ${num5} é maior que a média`)
    }
}
main()