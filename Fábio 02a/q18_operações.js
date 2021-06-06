const prompt = require('prompt-sync')()

function main(){
   

    const operacao = Number (prompt('Insira o número da operção : '))

    const valor1 = Number(prompt('Insira o primeiro valor: '))
    const valor2 = Number(prompt('Insira o segundo valor: '))

    const resultado = escolha(valor1, valor2, operacao)
    console.log(`A operação ${operacao} entre ${valor1} e ${valor2} é igual a ${resultado}`)
}

function escolha(num1, num2, operacao){
    if(operacao===1){
        const soma = num1 + num2
        return soma
        
    }else if(operacao===2){
        const sub = num1 - num2
        return sub

    }else if(operacao===3){
        const multi = num1 *num2
        return multi

    }else if(operacao===4){
        const divi = num1 / num2
        return divi
    }
}  
main()