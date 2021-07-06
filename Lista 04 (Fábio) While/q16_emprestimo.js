const prompt = require('prompt-sync')()

//Recebendo dados

function main(){

let emprestimo = 3000
let dia = 0

    while(emprestimo > 0 ){
        emprestimo = emprestimo - 198,30
        dia = dia + 1
    }
    console.log(`${dia} dias`)
}
main()