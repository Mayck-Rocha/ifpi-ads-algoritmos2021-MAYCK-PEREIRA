const prompt = require('prompt-sync')()

function main(){
    
    const numero = Number(prompt('insira um número com quatro dígitos: '))

    const resultado = efetuar(numero)

    if(resultado >= 1000 && resultado <= 9999 ){
        console.log('Obedece os parâmetros solicitados')
        
    }else{
        console.log('Não obedece aos parãmetros solicitados')
    }

}

function efetuar(num){
    const milhar_cetena = parseInt(num / 100)
    const dezena_unidade = num % 100
    const soma = milhar_cetena + dezena_unidade
    return (soma ** 2)
}
main()