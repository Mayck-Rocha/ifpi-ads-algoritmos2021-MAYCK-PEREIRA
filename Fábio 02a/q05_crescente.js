const prompt = require('prompt-sync')()

function main(){
    
    const num1 = Number(prompt('Insira um número: '))
    const num2 = Number(prompt('Insira um número: '))
    const num3 = Number(prompt('Insira um número: '))

    if(ordem(num1, num2, num3)){
        console.log('A ordem crescente é',num3, num2, num1)

    }else if(ordem(num2, num1, num3)){
        console.log('A ordem crescente é',num3, num1, num2)

    }else if(ordem(num1, num3, num2)){
        console.log('A ordem crescente é',num2, num3, num1)

    }else if(ordem(num2, num3, num1)){
        console.log('A ordem crescente é',num1, num3, num2)

    }else if(ordem(num3, num1, num2)){
        console.log('A ordem crescente é',num2, num1, num3)
        
    }else{
        console.log('A ordem crescente é',num1, num2, num3)
    }
}

function ordem(valor1, valor2, valor3){
    const ordem1 = (valor1 > valor2) && (valor1 > valor3)
    const ordem2 = ordem1 && (valor2 > valor3)
    const ordem3 = ordem2 && (valor3 < valor2)
    return ordem3 
}

main() 