const prompt = require('prompt-sync')()

function main(){
    const valor1 = Number(prompt('Insira o primeiro valor: '))
    const valor2 = Number(prompt('Insira o segundo valor: '))

    const resto = valor1 % valor2
    const soma = (valor1 + valor2)

//Se o resto for igual a 1

    if(resto === 1){
        console.log(`A soma das variáveis é ${soma} e o resto da divisão é ${resto}`)

//Se o resto for igual a 2

    }else if(resto === 2){
        if(valor1 % 2 === 0){
            console.log('O valor 1 é par')
        }  
        if(valor2 % 2 === 0){
            console.log('O valor 2 é par')
        }   
        if(!(valor1 % 2===0)){
            console.log('O valor 1 é ímpar')
        }    
        if(!(valor2 % 2===0)){
            console.log('O valor 2 é ímpar')
        }

//Se o resto for igual a 3

    }else if(resto === 3){
        const multi = soma * valor1
        console.log(multi)

//Se o resto for igual a 4

    }else if(resto === 4){
        const divi = soma / (valor2!= 0)
        console.log(divi)

//Se o resto não se enquadrar nos parâmetos acima

    }else{
       const quadrado_1 = Math.pow(valor1, 2) 
       const quadrado_2 = Math.pow(valor2, 2)

        console.log(`O quadrado do valor 1 é ${quadrado_1} e o valor 2 é ${quadrado_2}`)
    } 
}
main()