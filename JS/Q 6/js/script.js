// Questão 6 //

//let idade = parseInt(prompt("Idade"))

//if(idade >= 18){
    //alert('Pode entrar')
//}else if (idade >= 15 && idade<18){
    //alert('Pode entrar com os pais')
//}else{
    //alert('Não pode entrar')
//}
///////////////////////////////////////////////////////////

// Resposta Certa ✅:
var A = prompt("Digite uma letra: ")

if(A === "a" || "e" || A === "i" || A === "o" || A === "u"){
    console.log(`${A} é uma vogal`)
}else{
    console.log(`${A} é uma consoante`)
}