const prompt = require('prompt-sync')()

function main(){

      const numero = Number(prompt('Insira um número qualquer: '))

      if(parte_fracionada(numero) >= 0.5){
            const arredondamento = parseInt(numero) + 1
            console.log(arredondamento)
      }else{
            const arredondamento = parseInt(numero)
            console.log(arredondamento)
      }
}

function parte_fracionada(num){
      return num % parseInt(num)
}

main()