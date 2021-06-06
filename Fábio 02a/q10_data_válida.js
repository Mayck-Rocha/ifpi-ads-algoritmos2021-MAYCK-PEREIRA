const prompt = require ('prompt-sync')()

function main(){

    const dia = Number(prompt('Insira uma data (dia): '))
    const mes = Number(prompt('Insira uma data (mês): '))
    const ano = Number(prompt('Insira uma data (ano): '))


    const resultado = data(dia,mes,ano)
    console.log = resultado
}
function data(dia,mes,ano){
    if(dia <= 30 && mes <=12 && ano <= 2021){
        console.log(`${dia}/${mes}/${ano} é uma data válida`)
    }else{
        console.log(`${dia}/${mes}/${ano} é uma data inválida`)
    }
}
main()
