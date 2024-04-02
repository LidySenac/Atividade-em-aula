// Questão 9 //
//////////////////////////////////////////
//var resultado = (n1 + operacao + n2);

             //if(operacao ==="+")
                //resultado = n1 + n2;

             //if(operacao ==="*")
                //resultado = n1 * n2;


               //if(operacao ==="/" && n2 > 0)
                //resultado = n1 / n2;

              //if(operacao ==="-")
                //resultado = n1 - n2;

         //alert("O resultado da Operação é: " + resultado)
////////////////////////////////////////////////////////////////
//Resposta certa ✅

n1 = parseInt (prompt('Digite o primeiro número'));
n1 = parseInt (prompt('Digite o segundo número'));
let operacao = prompt('Digite a operação matemática:');

//Segunda opção: //
switch (operação) {
   case "+":
      console.log(`o resultado será: ${n1 + n2}`)
      break;

   case "-":
      console.log(`O resultado será: ${n1 - n2}`)
      break;

      case "*":
         console.log(`O resultado será: ${n1 * n2}`)
         break;
      
         case "/":
            console.log(`O resultado será: ${n1 / n2}`)
            break;
            
            default:
               console.log('apenas: "+" | "-" | "*" | "/" ')
}