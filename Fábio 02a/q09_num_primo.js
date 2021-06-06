const prompt = require ('prompt-sync')()

function main(){
    const num = Number(prompt('Insira um número de 1 a 100: '))

    const resultado = primo(num)
      console.log(resultado)  
    }
        


function primo (valor){
     if(valor/valor===1 && valor/1 === valor){
        return 'É primo'
       }else{
           return 'Não é primo'
       }
    }

main()