const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const num_funcionario = Number(prompt('Insira o número de funcionários: '))

    for(let i = 1; i <= num_funcionario; i++){
        const codigo = Number(prompt('Insira o código do funcionário: '))
        const horas = Number(prompt('Insira a quantidade de horas trabalhada: '))
        const dependente = Number(prompt('Insira o nº de dependentes: '))

        let salario = saber_salario(horas, dependente)
        let desconto_inss = desconto(salario, 8.5)
        let desconto_ir = desconto(salario, 5)

        const salario_liquido = salario - desconto_inss - desconto_ir


        console.log(`   Desconto do INSS: R$ ${desconto_inss.toFixed(2)}`)
        console.log(`   Desconto do IR: R$ ${desconto_ir.toFixed(2)}`)
        console.log(`   Salário Líquido: R${salario_liquido.toFixed(2)}`)
    }

}

function desconto(valor, porcentagem){
    return valor * porcentagem / 100
}

function saber_salario(horas, dependente){
    const valor_hr = 12 * horas
    const valor_por_dependente = 40 * dependente

    return valor_total = valor_hr + valor_por_dependente
}

main()