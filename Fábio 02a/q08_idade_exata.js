const prompt = require('prompt-sync')()

function main(){

    //Dados sobre a data atual

    const dia_atual = Number(prompt('Insira o dia atual: '))
    const mes_atual = Number(prompt('Insira o mês atual: '))
    const ano_atual = Number(prompt('Insira o ano atual: '))

    //Dados sobre a data de nascimento
    const dia_de_nascimento = Number(prompt('Insira o dia de Nascimento: '))
    const mes_de_nascimento = Number(prompt('Insira o mês de Nascimento: '))
    const ano_de_nascimento = Number(prompt('Insira o ano de Nascimento: '))

    const dia = dia_atual && ano_de_nascimento
    const mes_0 = mes_atual && mes_de_nascimento

    if(dia <= 31 && mes_0 <= 12){ 
      const idade_exata = idade(ano_atual, ano_de_nascimento, mes_atual, mes_de_nascimento, dia_atual, dia_de_nascimento)
      console.log(`Sua idade é ${idade_exata}`)
    }else{
        console.log('Data inválida')
    }

}

function idade(ano1, ano2, mes1, mes2, dia1, dia2){
    const ano = (ano1 - ano2) * 365  // Convertendo anos em dias

    const mes = (mes1 - mes2)        

    const positivo_mes1 = Math.pow(mes, 2)  
    const positivo_mes2 = Math.sqrt(positivo_mes1) * 30

    const dias = dia1 - dia2
    const positivo_dia1 = Math.pow(dias, 2)   
    const positivo_dia2 = Math.sqrt(positivo_dia1)    

    const soma = (ano + positivo_mes2 + positivo_dia2)  
    const resultado = Math.trunc(soma / 365)
    return resultado  
}
main() 