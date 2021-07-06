const prompt = require('prompt-sync')()

//Recebendo dados

function main() {
    let num1 = Number(prompt('Insira o primeiro número: '))
    let num2 = Number(prompt('Insira o segundo número: '))

    let continuar = true
    let contador = 0
    let mult = 0
    let quociente = 0

    while(mult !== num2 || continuar === true){
        contador++
        mult = contador * num2

        if(mult > num1){
            contador--
            quociente = num1 - (contador * num2)
            continuar = false
            break
        }
    }
    console.log(`O resultado é ${contador} e o quociente (resto) é ${quociente}`)
    
}

main()