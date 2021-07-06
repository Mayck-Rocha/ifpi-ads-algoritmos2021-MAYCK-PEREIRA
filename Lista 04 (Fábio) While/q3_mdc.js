const prompt = require('prompt-sync')()

//Recebendo os valores

function main(){

let num1 = Number(prompt('Insira o 1º número: '))
let num2 = Number(prompt('Insira o 2º número: '))

//Calculando o MDC

let numero = 2
let resul = 1

while(true){
    if(num1 % numero ===0 && num2 % numero ===0){
       num1 / numero
       num2 / numero
       resul = numero * numero
       
      
    }else{
        break
    }
    numero++

}
console.log(`O MDC de ${num1} e ${num2} é ${resul} `)
}


main()