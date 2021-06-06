const prompt = require('prompt-sync')()

function main(){

    const ang = Number(prompt('Insira um ângulo entre 0 e 360°: '))

    if(ang >=0 && ang <=90){
        console.log('Primeiro Quadrante')
    }else if(ang > 90 && ang <= 180){
        console.log('Segundo Quadrante')
    }else if(ang > 180 && ang <= 270){
        console.log('Terceiro Quadrante')
    }else if(ang > 270 && ang <= 360){
        console.log('Quarto Quadrante')
    }
}
main()