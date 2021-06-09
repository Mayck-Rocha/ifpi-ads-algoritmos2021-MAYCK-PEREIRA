const prompt = require ('prompt-sync')()

function main(){

    //Coletando os dados

    const nome = prompt('Insira o nome do vendedor: ')

    const vendas = Number(prompt("Insira o valor das vendas no mês em R$:  "))
    
    const comissao1 = valor_comi1(vendas)
    const comissao2 = valor_comi2(vendas)
    const comissao3 = valor_comi3(vendas)
    const comissao4 = valor_comi4(vendas)

    const salario_fixo = 1100

    //Oferecendo as condições
    
    if(vendas <= 5000){
        console.log(`O salário fixo de ${nome} é de R$ ${salario_fixo.toFixed(2)} e sua comissão é de R$ ${comissao1.toFixed(2)} `)
        console.log(`O valor final foi de R$ ${salario_fixo + comissao1}`)


    }if(vendas > 5000 && vendas <= 10000){
        console.log(`O salário fixo de ${nome} é de R$ ${salario_fixo.toFixed(2)} e sua comissão é de R$ ${comissao2.toFixed(2)} `)
        console.log(`O valor final foi de R$ ${salario_fixo + comissao2}`)


    }if(vendas > 10000 && vendas <= 30000){
        console.log(`O salário fixo de ${nome} é de R$ ${salario_fixo.toFixed(2)} e sua comissão é de R$ ${comissao3.toFixed(2)} `)
        console.log(`O valor final foi de R$ ${salario_fixo + comissao3}`)

    }if(vendas > 30000){
        console.log(`O salário fixo de ${nome} é de R$ ${salario_fixo.toFixed(2)} e sua comissão é de R$ ${comissao4.toFixed(2)} `)
        console.log(`O valor final foi de R$ ${salario_fixo + comissao4}`)
    }

    //Funções que satisfazem as condições

}
function valor_comi1(vendas1){
      const comi1 = (vendas1 * 0 )
      return comi1
} 
function valor_comi2(vendas2){
      const comi2 = vendas2 - 5000
      const porcent2 = ((comi2 * 5) / 100)
      return porcent2

}
function valor_comi3(vendas3){ 
      const comi3_5 = vendas3 - 5000
      const comi3_10 = vendas3 - 10000
      const porcent3 = (((comi3_5 * 5) / 100) + ((comi3_10 * 10) / 10))
      return porcent3

}
function valor_comi4(vendas4){
      const porcent4 = (vendas4 * 20) / 100
      return porcent4

}
main()