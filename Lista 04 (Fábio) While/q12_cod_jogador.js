const prompt = require('prompt-sync')()

//Recebendo Dados

function main(){
    let jogador_1 = 0
    let jogador_2 = 0
    let pontos = 0

    while(true){

        pontos = Number(prompt('Qual dos jogadores marcaram ponto: '))
        if(pontos == 1){
            jogador_1 = jogador_1 + 1
        }if(pontos == 2){
            jogador_2 = jogador_2 + 1
        }
        if(jogador_1 >= 5){
            if(jogador_1 - jogador_2 >= 2){
                console.log(`O jogador 1 ganhou`)
                break
            }
        }
        if(jogador_2 >= 5){
            if(jogador_2 - jogador_1 >= 2){
                console.log(`O jogador 2 ganhou`)
                break
            }
        }
    }
}

main()