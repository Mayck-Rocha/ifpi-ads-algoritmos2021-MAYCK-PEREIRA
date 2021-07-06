const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

let opiniao = true;
let serra = 0 
let dilma = 0
let ciro = 0
let indeciso = 0
let outro = 0
let nulo_ou_branco = 0
let serra_porcent = 0
let dilma_porcent = 0
let ciro_porcent = 0
let indeciso_porcent = 0
let outro_porcent = 0
let nulo_porcent = 0

    while(opiniao){
        console.log('Serra = 45 | Dilma = 13 | Ciro Gomes = 23')
        console.log('Indeciso = 99 | Outros = 98 | nulo/branco = 0')
        escolha = Number(prompt('Escolha um cadidato ou demais escolhas: '))
        if(escolha == 45){
            serra = serra + 1

        }else if(escolha == 13){
            dilma = dilma + 1

        }else  if(escolha == 23){
            ciro = ciro + 1

        }else if(escolha == 99){
            indeciso = indeciso + 1

        }else if(escolha == 98){
            outro = outro + 1

        }else if(escolha == 0){
            nulo_ou_branco = nulo_ou_branco + 1

        }
        
        console.log('Continuar? (sim / nao) ')
        status_loop = prompt()

        if(status_loop != 'sim'){
            opiniao = false
        }
    }
    
    total_entrevistados = nulo_ou_branco + outro + indeciso + ciro + dilma + serra  
    
    serra_porcent = (serra * 100)/total_entrevistados 
    dilma_porcent = (dilma * 100)/total_entrevistados
    ciro_porcent = (ciro * 100)/total_entrevistados
    outro_porcent = (outro * 100)/total_entrevistados
     indeciso_porcent = (indeciso * 100)/total_entrevistados
    nulo_porcent = (nulo_ou_branco * 100)/total_entrevistados

    console.log('_________________')
    console.log(`Serra: ${serra_porcent.toFixed(1)}% `)
    console.log('_________________')
    console.log(`Dilma: ${dilma_porcent.toFixed(1)}% `)
    console.log('_________________')
    console.log(`Ciro : ${ciro_porcent.toFixed(1)}% `)
    console.log('_________________')
    console.log(`Indecisos: ${indeciso_porcent.toFixed(1)}% `)
    console.log('_________________')
    console.log(`Outros: ${outro_porcent.toFixed(1)}% `)
    console.log('_________________')
    console.log(`Nulo: ${nulo_porcent.toFixed(1)}% `)
    console.log('_________________')
}
main()