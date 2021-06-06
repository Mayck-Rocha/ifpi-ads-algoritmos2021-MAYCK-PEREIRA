const prompt = require('prompt-sync')()

function main(){
    
    const senha = Number(prompt('Insira a senha: ')) 

    if(senha === 1234){
        console.log('Acesso permitido')

    }else{
        console.log('Acesso negado')
    }

}
main()