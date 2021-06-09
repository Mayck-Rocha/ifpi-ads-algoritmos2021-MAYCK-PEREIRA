const prompt = require ('prompt-sync')()

function main(){

    //Recebendo os dados sobre a COVID-19

    const media_ha_14 = Number(prompt('Insira a média de casos há 14 dias atrás: '))

    const media_hoje = Number(prompt('Insira a média de casos hoje: '))

    //Calculando a variação

    const variacao = parseInt((((media_hoje - media_ha_14) / media_ha_14) * 100))

    //Oferecendo as condições
     
    if(variacao < 15 && variacao > -15){
        console.log(`A variação foi de ${variacao}% e se encontra em estabilidade`)


    }if(variacao <= -15){
        console.log(`A variação foi de ${variacao}% e se encontra em queda`)

        
    }if(variacao >= 15)
        console.log(`A variação foi de ${variacao}% e se encontra em alta`)

}
main()