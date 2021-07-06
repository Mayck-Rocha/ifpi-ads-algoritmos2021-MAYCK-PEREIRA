const input = require('prompt-sync')()

//Recebendo dados

function main(){

let pessoas = 0
let soma_idade_mulher = 0
let soma_idade_homem = 0
let idade, sexo
let estado_civil
let solteiros_homens = 0
let solteiros_mulheres = 0
let mulheres_solteiras30 = 0

while(pessoas < 4){
    sexo = Number(input('Insira o sexo (1=Masculino 2=Feminino): '))
    idade = Number(input('Insira a idade: '))
    estado_civil = Number(input('Insira o estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): '))

    if(sexo == 1){
        soma_idade_homem = soma_idade_homem + idade

    }else if(sexo = 2){
        soma_idade_mulher = soma_idade_mulher + idade
    }

    if(estado_civil == 2 && sexo == 1){
        solteiros_homens = solteiros_homens + 1

    }else if(estado_civil == 2 && sexo == 2){
        solteiras_mulheres = solteiros_mulheres + 1
    }

    if(idade > 30 && sexo == 2){
        mulheres_solteiras30 = mulheres_solteiras30 + 1
    }


    pessoas++
}
const media_idade_homem = soma_idade_homem/100
const media_idade_mulher = soma_idade_mulher/100

console.log(`Média de idade das mulheres: ${media_idade_homem}`)
console.log(`Média de idade das homens  : ${media_idade_mulher}`)
console.log(`Percentual de homens solteiros: ${solteiros_homens} %`)
console.log(`Percentual de mulheres solteiras: ${solteiros_mulheres} %`)
console.log(`A quantidade de mulheres divorciadas acima de 30 anos: ${mulheres_solteiras30}`)
}

main()