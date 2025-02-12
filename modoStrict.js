"use strict"; 

//ERRO: "idade" não foi declarado antes de ser usado

idade = 25;

console.log(idade);


//ERRO: "y" não foi declarado antes de ser usado
function minhaFuncao() {
 y = 20;  
}
console.log(minhaFuncao());


// ERRO: Parâmetro "a" foi declarado duas vezes
function soma(a, a){
    return a + a;
    
}
    console.log(soma(2, 2))


// ERRO: O operador delete não pode ser usado em variáveis e usando o modo normal falharia sem deixar explícito o erro
let cidade  = "Salvador";
delete cidade;