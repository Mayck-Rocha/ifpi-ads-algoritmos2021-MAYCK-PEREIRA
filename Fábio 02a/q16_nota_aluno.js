const prompt = require('prompt-sync')()

function main(){

    const nota_1 = Number(prompt('Insira a primeira nota: '))
    const nota_2 = Number(prompt('Insira a segunda nota: '))

    const media = (nota_1 + nota_2) / 2

    if(media >= 7){
        console.log('Aprovado')

    }else if(media < 7){ 

        const exame = Number(prompt('Insira a nota do novo exame: '))
        const media_final =(nota_1 + nota_2 + exame)/3

        if(media_final >=5){
            console.log('Aprovado')
        }else if(media_final < 5){
            console.log('Reprovado')
        }
    }

}
main()