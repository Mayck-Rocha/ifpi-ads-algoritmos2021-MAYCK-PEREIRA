const prompt = require ('prompt-sync')()

function main(){
    const num = Number(prompt('Insira um número qualquer: '))

    const resultado = impar_ou_par(num)
      console.log(resultado)  
    }
        


function impar_ou_par (valor){
     if(valor % 2 === 0){
        return 'É Par'
       }else{
           return 'É Impar'
       }
    }

main()