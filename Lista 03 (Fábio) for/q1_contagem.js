const prompt = require('prompt-sync')()

// Recebendo dados

function main(){
    const numN = Number(prompt('Insira um número Inteiro N: '))
    
    for(contagem = 1; numN >= contagem; contagem++){
        console.log(contagem)
    }
}
main()