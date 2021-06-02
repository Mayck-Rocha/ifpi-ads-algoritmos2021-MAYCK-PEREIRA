const prompt = require('prompt-sync')();

// Entrada

const bin = prompt('Insira o número em binário: ')

// Convertendo de binário para decimnal

const dec = ((bin[0]*2**3)+(bin[1]*2**2)+(bin[2]*2**1)+(bin[3]*2**0))

 // Saida
 
 console.log(bin, 'binário equivale a', dec,'decimal')