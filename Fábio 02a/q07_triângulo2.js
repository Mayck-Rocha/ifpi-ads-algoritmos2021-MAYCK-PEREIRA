const prompt = require('prompt-sync')()

function main(){
    
    const lado1 = Number(prompt('Insira o lado 1: '))  
    const lado2 = Number(prompt('Insira o lado 2: '))
    const lado3 = Number(prompt('Insira o lado 3: '))

    if(e_triangulo(lado1, lado2, lado3)){
        
 
        const tipo = tipo_triangulo(lado1, lado2, lado3)
        console.log(tipo)
 
     }else{
         console.log('Não é triângulo')
     }
 }
 
 function e_triangulo(l1, l2, l3){
     const soma = l1 + l2
     return !(soma < l3) && (l1 != 0 && l2 != 0 && l3 !=0)
 }
 
 function tipo_triangulo(l1, l2, l3){
     if((l1 != l2) && (l1 != l3) && (l2 != l3)){
         return 'É um triângulo escaleno'
     }else if((l1 === l2) && (l1=== l3)){
         return 'É um triângulo equilátero'
     }else if(l1===l2|| l1===l3 || l2===l3){
         return 'É um triângulo isósceles'
     }
 }
 
 main()