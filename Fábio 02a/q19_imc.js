  
const prompt = require('prompt-sync')()

function main(){
   const peso = Number(prompt('Insira o peso em kg: '))
   const altura = Number(prompt('Insira a altura em m : '))

   const imc = peso / Math.pow(altura, 2)

    if(imc < 25){
          console.log(`O IMC da pessoa é ${imc.toFixed(1)} e sua condição é normal`)

    }else if(imc >= 25 && imc  <= 30){
          console.log(`O IMC da pessoa é ${imc.toFixed(1)} e sua condição é obesa`)

    }else if(imc > 30){
        console.log(`O IMC da pessoa é ${imc.toFixed(1)} e sua condição é obesidade mórbida`)
    }
}    
main()