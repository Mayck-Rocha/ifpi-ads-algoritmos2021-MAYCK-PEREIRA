const prompt = require('prompt-sync')()

//Recebendo Valores

function main(){
    let num = Number(prompt('Insira uma número: '))

//Divisões sucessivas por 2
    
    while(num >= 1){
    num = num / 2
    
    }
    console.log('O resultado da última divisção foi',num.toFixed(1))
}
main()