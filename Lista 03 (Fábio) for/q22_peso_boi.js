const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

    const num = 5
    
    let num_de_indentificacao = Number(prompt('Insira o Nº de Identificação: '))
    let peso = Number(input('insira o peso(kg): '))

    let boi_mais_magro = peso
    let boi_mais_gordo = peso

    let num_magro = num_de_indentificacao
    let num_gordo = num_de_indentificacao


    for(let i = 1; i <= num ; i++){

        if(boi_mais_gordo > peso){
            boi_mais_gordo = peso
            num_gordo = num_de_indentificacao
            
        }else if(boi_mais_magro < peso){
            boi_mais_magro = peso
            num_magro = num_de_indentificacao
        }
        
        if(i < num){
            num_de_indentificacao = Number(input('Insira o Nº de Identificação: '))
            peso = Number(input('Insira o pprompteso(kg): '))
        }
    }

    console.log(`Boi mais gordo - Nº ${num_gordo}, Peso(kg): ${boi_mais_gordo}`)
    console.log(`Boi mais magro - Nº ${num_magro}, Peso(kg): ${boi_mais_magro}`)


}

main()