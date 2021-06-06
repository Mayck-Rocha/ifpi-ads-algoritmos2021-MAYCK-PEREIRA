const prompt = require('prompt-sync')()

function main(){
    
    const angulo1 = Number(prompt('Insira o ângulo 1: '))  
    const angulo2 = Number(prompt('Insira o ângulo 2: '))
    const angulo3 = Number(prompt('Insira o ângulo 3: '))

    if(e_triangulo(angulo1, angulo2, angulo3)){
        console.log('É um triângulo')

        const tipo = tipo_triangulo(angulo1, angulo2, angulo3)
        console.log(tipo)
    }else{
        console.log('Não é um triângulo')
    }
}

function e_triangulo(a1, a2, a3){
    const soma = a1 + a2 + a3
    return (soma === 180) && (a1 != 0 && a2 != 0 && a3 != 0 )
}

function tipo_triangulo(a1, a2, a3){
    if(a1 === 90 || a2 === 90 || a3 === 90){
        return 'É um triângulo retângulo'
    }else if(a1 < 90 && a2 < 90 && a3 < 90){
        return 'É um triângulo acutângulo'
    }else if(a1 > 90 || a2 > 90 || a3 > 90){
        return 'É um triângulo obtusângulo'
    }
}   

main() 