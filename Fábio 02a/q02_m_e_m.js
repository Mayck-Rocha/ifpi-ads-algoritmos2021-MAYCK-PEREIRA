const prompt = require ('prompt-sync')()

function main(){
    
    const num1 = Number(prompt('Insira o primeiro número: '))
    const num2 = Number(prompt('Insira o segundo número'))

    if(num1 > num2 ){
        console.log('O primeiro número é maior que o segundo número')
    }else{
        console.log('O segundo número é maior que o primeiro número')
    }
}

main()