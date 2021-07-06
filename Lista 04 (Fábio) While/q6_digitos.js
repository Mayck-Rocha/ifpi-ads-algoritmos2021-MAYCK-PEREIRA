const prompt = require('prompt-sync')()

//Recebendo Dados

function main(){

    let numero = Number(prompt('Insira um número: '))
    let dig_inicial = 1
    digito = 1

//Calculando o número de dígitos
    while(numero/dig_inicial >= 10){
        digito = digito + 1
        dig_inicial = dig_inicial * 10
    }

    console.log(`número de dígitos: ${digito}`)

}
main()