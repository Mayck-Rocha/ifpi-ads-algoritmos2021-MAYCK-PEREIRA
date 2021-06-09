const prompt = require ('prompt-sync')()


function main (){

//Recebendo dados

    const leitura_atual = Number(prompt('Insira o valor da leitura atual em KWh: '))
    const leitura_anterior = Number(prompt('Insira o valor da leitura anterior KWh: '))

    

    const KWh_gasto = (leitura_atual - leitura_anterior) //diferença entre as leituras

    const Valor_faturado1 = Math.trunc(KWh_gasto * 0.59)  //valor faturado entre 30 e 100

    const Valor_faturado2 = Math.trunc(KWh_gasto * 0.75) // Valor faturado maior que 100

    const Valor_ICMS = Math.trunc(Valor_faturado1 * 0.20) 

    const Valor_PIS = Math.trunc(Valor_faturado1 * 0.15) 

    const Valor_Iluminacao = Math.trunc(KWh_gasto * 0.06) 

    const Valor_bandeira = Math.trunc((KWh_gasto / 100) * 8) 

    const valor_total_1 = (Valor_faturado1 + Valor_ICMS + Valor_PIS) 

    const valor_total_2 = (Valor_faturado1 + Valor_ICMS + Valor_PIS + Valor_Iluminacao) 

    const valor_total_3 = (Valor_faturado2 + Valor_ICMS + Valor_PIS + Valor_Iluminacao + Valor_bandeira) 

//Oferecendo as condições
        
    if (KWh_gasto <= 30){
        console.log(` VALOR FATURADO: R$ 0,00 / BANDEIRA: R$ 0,00 / ICMS: R$ 0,00 / PIS/CONFIS: R$ 0,00 / TAXA DE ILUMINAÇÃO: R$ 0,00 `)
        
    }else if(KWh_gasto > 30 && KWh_gasto <=100){
        console.log(` Valor faturado: R$ ${Valor_faturado1} / Bandeira: R$ 0,00 / ICMS: R$${Valor_ICMS} / PIS/CONFIS: R$ ${Valor_PIS}`)
        
        if(KWh_gasto > 80){
            console.log(` Taxa de Iluminação R$ ${Valor_Iluminacao} / Valor total: R$ ${valor_total_2}`)
            

        } else if (KWh_gasto <= 80){
            console.log(` Taxa de Iluminação R$ 0,00 / Valor total: R$ ${valor_total_1} `)
            
        } 
    }else{ (KWh_gasto > 100)
        console.log(` Valor faturado: R$ ${Valor_faturado2} /  ICMS: R$ ${Valor_ICMS} / PIS/CONFIS: R$ ${Valor_PIS}`)
        console.log(` Taxa de Iluminação R$ ${Valor_Iluminacao} / Bandeira R$ ${ Valor_bandeira} / Valor total: R$ ${valor_total_3}`)
    
    }
    }
    
main()