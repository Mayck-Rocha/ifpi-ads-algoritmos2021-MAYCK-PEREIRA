const prompt = require('prompt-sync')()

function main() {

    const numero = Number(prompt('Insira um número: '))

    let divisor = 1

    while(numero >= divisor){

        if(numero % divisor === 0){
            
            console.log(`${numero} é divisível por ${divisor}`)
        }
        divisor++
    }
    
}

main()