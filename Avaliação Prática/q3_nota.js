const prompt = require('prompt-sync')()

function main(){

    //Recolhendo os dados

    const nota1 = Number(prompt('Insira a nota da primeira avaliação: '))
    const nota2 = Number(prompt('Insira a nota da segunda avaliação: '))
    const nota3 = Number(prompt('Insira a nota das atividades : '))

    //Calculando a média com os pesos

    const media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 1)) / 6

    //Oferecendo as condições

    if(media >= 7){ 
        console.log(`Aprovado com média ${media.toFixed(1)}`)



    }if(media < 7 && media >= 4){

        const prova_final = Number(prompt('Insira a nota da prova final : '))
        const media_final = (media + prova_final) / 2

        if (media_final >=6){
            console.log(`Aprovado na prova final com média ${media_final.toFixed(1)}`)

        }if (media_final < 6){
            console.log(`Reprovado na prova final com média ${media_final.toFixed(1)}`)
        }    
            

    }if(media < 4){
        console.log(`Reprovado com média ${media.toFixed(1)}`) 
    }
            
        
}
main()