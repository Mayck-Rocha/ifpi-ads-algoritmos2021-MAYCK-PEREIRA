const prompt = require('prompt-sync')()

// Recebendo dados

function main(){
    const numN = Number(prompt('Insira um número Inteiro N: '))
    
    for(contagem = 1; numN >= contagem; contagem++){

        if(contagem % 2 != 0)
           continue
        console.log(contagem)
    }
}
main()