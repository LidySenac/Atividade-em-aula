// Questão 4//
// Resposta errada ❎
//console.log(2+4)
//console.log(10 -5)
//console.log(5*4)
//console.log(10/2)
/////////////////////////////////////////////

//Resposta certa ✅

n2 = parseInt(prompt('Digite um número: '));
let contador = 0;

while (contador <= 10) {
    console.log(`${contador} * ${n2} = ${contador * n2}`);
    contador++
}