const prompt = require('prompt-sync')();

//Entrada
const fahrenheit = Number(prompt('Insira o valor da temperatura em °F:'))


//Calculando a temperatura em °C

const C =  ((5 * fahrenheit - 160) / 9)


//Saída 

console.log('O valo de °',fahrenheit,'em Celsius é °',C)