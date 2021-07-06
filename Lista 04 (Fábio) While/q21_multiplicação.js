const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
   const num1 = Number(prompt('Insira o primeiro número: '))
   const num2 = Number(prompt('Insira o segundo número: '))

   let contagem_num2 = num2
   let contagem = 0
   
   while(contagem_num2 != 0){
    contagem = contagem + num1
    contagem_num2--
    }
    console.log(`A multiplicação de ${num1} por ${num2} é igual a ${contagem}`)
}
main()