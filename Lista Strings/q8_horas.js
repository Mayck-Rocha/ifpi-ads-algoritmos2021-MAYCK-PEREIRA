const prompt = require('prompt-sync')()

//Recebendo dados

function main(){
    const horas = prompt('Insira um horário no formato hh:mm:ss: ')

    let hrs = ''
    let min = ''
    let seg = ''

    let caractere = ''

    for(let i = 0; i < horas.length; i++){
        caractere = horas[i]
        if(caractere.charCodeAt(0) === 58){
            continue
        }else if(hrs.length !== 2){
            hrs = hrs + caractere
        }else if(min.length !== 2){
            min = min + caractere
        }else{
            seg = seg + caractere
        }
    }

    console.log(`${hrs} hora(s), ${min} minuto(s) e ${seg} segundo(s)`)
}

main()