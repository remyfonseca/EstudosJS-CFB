"use strict";

// Exemplo 1: Uso de VAR
if(true){
    var nome1 = "Remy"; // var é escopo de função ou global, e não tem escopo de bloco
}
console.log(nome1); // Será impresso o valor da variável nome1

// Exemplo 2: Uso de LET
if(true){
    let nome2 = "Remy2"; // let tem escopo de bloco, só existe dentro do bloco
}
console.log(nome2); // Dará erro, pois a variável nome2 não existe fora do bloco

// Exemplo 3: Uso de LET dentro de função
function teste1(){
    let nome3 = "Remy3"; // let tem escopo de bloco, então será acessível em toda a função
    if(true){
        console.log("Dentro do if: " + nome3);
    }
    console.log("Fora do if: " + nome3);
}

teste1(); // Será impresso o valor da variável nome3

console.log("Fora da função: " + nome3); // Dará erro, pois a variável nome3 não existe fora da função


// Exemplo 4: Uso de VAR dentro de função
function teste2(){
    
    if(true){
        var nome4 = "Remy4"; // Var com escopo de função, então será acessível aqui
        console.log("Dentro do if: " + nome4);
    }
    console.log("Fora do if: " + nome4); // Não seria acessível se fosse LET // Mas Var mantém escopo de função e funciona
}
teste2(); // Será impresso o valor da variável nome4

console.log("Fora da função: " + nome4); // Dará erro, pois a variável nome4 não existe fora da função

// Exemplo 5: Uso de CONST
const curso = "JavaScript";
curso = "HTML" // Dará erro, pois não é possível alterar o valor de uma constante
console.log(curso);