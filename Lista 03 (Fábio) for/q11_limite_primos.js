const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

    let limite_superior = Number(prompt('Insira o limite superior: '))
    let limite_inferior = Number(prompt('Insira o limite inferior: '))

    
        console.log(`Os números primos entre ${limite_inferior} e ${limite_superior} são:`)

    for(let i = limite_inferior ; i <= limite_superior ; i++){

        if(i % 2 == 0 || i % 3 === 0 || i % 5 === 0){
            continue
        }
        
        console.log(i)
        
    }


}



main()