const prompt = require('prompt-sync')()

function main(){

let cidade_a = 200000
let cidade_b = 800000
let anos = 0
    while(cidade_a <= cidade_b){
        cidade_a = cidade_a + (cidade_a * 0.035)
        cidade_b = cidade_b + (cidade_b * 0.0135)
        anos++
    }
    console.log(`O tempo em que a população de A ultrapasse a população de B é igual a ${anos} anos `)
}
main()