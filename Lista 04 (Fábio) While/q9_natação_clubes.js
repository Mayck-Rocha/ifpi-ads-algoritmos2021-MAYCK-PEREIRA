const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

const num_prova = Number(prompt('Insira o número da prova : '))

let quant_nadadores = Number(prompt('Insira a quantidade de nadadores: '))

    while(quant_nadadores > 0){

        let nome = Number(prompt('Nome: '))
        let classfic = Number(prompt('Classificação: '))
        let tempo = Number(prompt('Tempo: '))
        let time = prompt('Time: ')
        
        if(time == 'a' || time == 'A'){
            pontos_a = pontos_a + classfic
        }else{

        }
        quant_nadadores--
    }
}
main()