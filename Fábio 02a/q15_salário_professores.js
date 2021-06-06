const prompt = require('prompt-sync')()


function main(){

    
    const horas1 = Number(prompt('Insira a quantidade de horas dadas de aulas pelo Prof 1: '))
    const valor1 = Number(prompt('Valor recebido por horas prof 1: '))

    
    const horas2 = Number(prompt('Insira a quantidade de horas dadas de aulas pelo Prof 2: '))
    const valor2 = Number(prompt('Valor recebido por horas Prof 2: '))

    const salario_prof1 = horas1 * valor1
    const salario_prof2 = horas2 * valor2



    if(salario_prof2 > salario_prof1){
        
        console.log('Quem recebe maior salário é o prof 2')
    }else if(salario_prof2 < salario_prof1){
        
        console.log('Quem recebe maior salário é o prof 1')
    }

}
main() 