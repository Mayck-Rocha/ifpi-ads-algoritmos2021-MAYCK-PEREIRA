const prompt = require('prompt-sync')();

// Entrada

const dias = Number(prompt('Insira a quantidade em dias: '))

//Convertendo dias para anos

const anos = Math.trunc(dias / 360)
const meses = Math.trunc((dias - (anos * 360)) / 30)
const diasD = dias - (anos * 360) - (meses * 30)

//Saída
console.log('A idade em',dias,'dias equivalem a',anos,'anos,',meses,'meses e ',diasD,'dias')
