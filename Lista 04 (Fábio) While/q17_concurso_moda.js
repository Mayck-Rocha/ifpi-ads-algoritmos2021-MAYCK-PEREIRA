const prompt = require('prompt-sync')()

function main() {
    let nome = ''
    let peso = 0
    let altura = 0

    let mais_alta = altura
    let mais_baixa = altura
    let mais_gorda = peso
    let mais_magra = peso

    let nome_mais_alta = ''
    let nome_mais_baixa = ''
    let nome_mais_gorda = ''
    let nome_mais_magra = ''

    while(nome !== 'fim'){
        nome = prompt('Insira o nome da candidata: ')

        if(nome === 'fim'){
            break
        }

        peso = prompt('Insira o peso da candidata (kg): ')
        altura = prompt('Insira a altura da candidata(cm): ')

        if(peso > mais_gorda){
            mais_gorda = peso 
            nome_mais_gorda = nome
        }
        if(mais_magra === 0){
            mais_magra = peso
            
        }else if(peso < mais_magra){
            mais_magra = peso
            nome_mais_magra = nome
        }

        if(altura > mais_alta){
            mais_alta = altura
            nome_mais_alta = nome
        }
        if(mais_baixa === 0){
            mais_baixa = altura
        }else if(altura < mais_baixa){
            mais_baixa = altura
            nome_mais_baixa = nome
        }
    }
    console.log('___________________________________')
    console.log(`A candidata mais gorda é a ${nome_mais_gorda}`)
    console.log('___________________________________')
    console.log(`A candidata mais magra é a ${nome_mais_magra}`)
    console.log('___________________________________')
    console.log(`A candidata mais alta é a ${nome_mais_alta}`)
    console.log('___________________________________')
    console.log(`A candidata mais baixa é a ${nome_mais_baixa}`)
    console.log('___________________________________')
}
main()