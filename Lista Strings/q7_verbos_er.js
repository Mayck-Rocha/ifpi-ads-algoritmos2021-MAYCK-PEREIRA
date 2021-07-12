const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const verbo = prompt('Insira um verbo terminado em ER: ')

     conjugacao_final(verbo)

    
}

function conjugacao_final(verbo){
    let caractere = ''
    
    if(caractere.charCodeAt(0) !== 114 ){
      for(let i = 0; i < verbo.length - 2 ; i++){
        caractere = caractere + verbo[i]
      
        
            
         terminacoes(caractere)
        }
        }
    }
    
function terminacoes(caractere){
    console.log('Eu',caractere+'o')
    console.log('Tu',caractere+'es')
    console.log('Ele',caractere+'e')
    console.log('Nós',caractere+'emos')
    console.log('Vós',caractere+'eis')
    console.log('Eles',caractere+'em')
    }

main()