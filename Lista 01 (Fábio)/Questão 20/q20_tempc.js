const prompt = require('prompt-sync')();

//Entrada
const celsius = Number(prompt('Insira o valor da temperatura em °C:'))


//Calculando a temperatura em °F

const F = ((9 * celsius + 160) / 5)


//Saída 

console.log('O valo de °',celsius,'em fahrenheit é °',F)