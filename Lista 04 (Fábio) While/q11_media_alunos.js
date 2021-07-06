const prompt = require('prompt-sync')()

//Recebendo Dados


function main(){

let quant_alunos = Number(prompt('Insira a quantidade de alunos: '))

let matricula = new Array(quant_alunos)
let media_aluno = new Array(quant_alunos)

let nota1 = 0  
let nota2 = 0
nota3 = 0

let conferir =  quant_alunos

let passou = 0 
let reprovou = 0    

while(quant_alunos > 0){
    
    matricula[quant_alunos] = Number(prompt(`Insira a matrícula ${quant_alunos}: `))

     nota1 = Number(prompt('Nota 1: '))
     nota2 = Number(prompt('Nota 2: '))
     nota3 = Number(prompt('Nota 3: '))

     media_aluno[quant_alunos] = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10
     
     quant_alunos--
    }

while(conferir > 0){

    if(media_aluno[conferir] >= 7){

        console.log(`${matricula[conferir]} passou com media ${media_aluno[conferir]}`)
        passou++
    }

    else{
        console.log(`${matricula[conferir]} reprovou com media ${media_aluno[conferir]}`)
        reprovou++
    }
    conferir--
}
console.log(`Num Aprovados: ${passou}`)
console.log(`Num Reprovados: ${reprovou}`)
console.log(`Total de alunos ${passou + reprovou}`)
}
main()