const prompt = require('prompt-sync')()

function main(){

    const hora_inicio = Number(prompt('Insira as horas iniciais: '))
    const minu_inicio = Number(prompt('Insira os minutos iniciais:'))

    const horas_fim = Number(prompt('Insira as horas terminais: '))
    const minu_fim = Number(prompt('Insira os minutos terminais: '))
    
    const reaj_inicial = (hora_inicio < 24 && minu_inicio < 60)
    const reaj_final = (horas_fim < 24 && minu_fim < 60)
    const reajuste_inicial_final = reaj_inicial && reaj_inicial


    if(reajuste_inicial_final && hora_inicio > horas_fim && minu_inicio > minu_fim){
        const duracao_hr = (24 - (hora_inicio - horas_fim)) - 1
        const duracao_min = 60 - (minu_inicio - minu_fim)
        console.log(`O jogo teve a duração de  ${duracao_hr} horas e ${duracao_min} minutos`)

    
    }else if(reajuste_inicial_final && hora_inicio > horas_fim && minu_inicio < minu_fim){
        const duracao_hr = (24 - (hora_inicio - horas_fim)) - 1
        const duracao_min = minu_fim - minu_inicio
        console.log(`O jogo teve a duração de ${duracao_hr} horas e ${duracao_min} minutos`)


    }else if(reajuste_inicial_final && hora_inicio < horas_fim && minu_inicio > minu_fim){
        const duracao_hr = (horas_fim - hora_inicio) - 1
        const duracao_min = 60 - (minu_inicio - minu_fim)
        console.log(`O jogo teve a duração de ${duracao_hr} horas e ${duracao_min} minutos`)


    }else if(reajuste_inicial_final && hora_inicio < horas_fim && minu_inicio < minu_fim){
        const duracao_hr = (horas_fim - hora_inicio) 
        const duracao_min = minu_fim - minu_inicio
        console.log(`O jogo teve a duração de ${duracao_hr} horas e ${duracao_min} minutos`)

        
    }else{
        console.log('Horário inválido')
    }
    

}
main()