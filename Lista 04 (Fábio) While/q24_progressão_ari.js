const prompt = require('prompt-sync')()

//Recebendo dados

function main() {
    const razao = Number(prompt('Insira a razão da PA: '))
    const pri_termo = Number(prompt('Insira o primeiro termo da PA: '))

    const limite = Number(prompt('Insira o limite da PG: '))

    let acumulador = pri_termo

    let contador = 0

    while(acumulador < limite){
        console.log(`Valores: ${acumulador}`)
        
        acumulador = acumulador + razao

        contador++

        if(acumulador > limite){
            break
        }
        
    }
    console.log('_______________________________')
    console.log(`A quantidade de valores foi: ${contador}`)
    console.log('_______________________________')
}
main()