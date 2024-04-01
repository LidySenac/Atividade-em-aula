// Questão 3 //
//Resposta errada ❎

//const m = 5

//if(m >=5){
   //console.log("M é maior que 5" + " valor de M = " + m)
//}

//Resposta Certa ✅:

var number = parseInt(prompt("Digite um número"))

console.log("número pares entre 1 e " + number + ":");
for(var i=1; i <=number; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
//////////////////////////////////////////////////////////////