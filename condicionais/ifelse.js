let num = 10;
let energia = 20;
let clima = "sol"

if(num>10){
    console.log("Numeral maior que 10");
}else if(num<10){
    console.log("Numeral menor que 10");
} else {
    console.log("Numeral é 10")
}

if(energia > 70 && clima === "sol"){
    console.log("Vou a praia");
} else{
    console.log("Vou ao cinema");
}

// Desafios IF ELSE 1 

let valorX = 15, valorY = 25;
if ((valorX & valorY) > 50){
    console.log("Combinação forte!")
} else {
    console.log("Combinação baixa!")
}

// Desafio IF ELSE 2 

let energiaT = 90;
let climaD = "ensolarado";

let estado = energiaT >= 50 ? "Energia" : "Cansado";
console.log(estado)

if(estado === "Energia"){
    if(energiaT  > 80 && climaD === "ensolarado"){
        console.log("Praia");
    } else if (energiaT >= 50 && energiaT <=80) {
        console.log("Treino");
    } else{
        console.log("Cinema")
    }
}

// Desafio IF ELSE 3

let arr1 = [10,20,30,40,50,60];

if (arr1.length > 5){
    console.log("O numero de itens nesse array é maior que 5");
} else {
    console.log("O numero é menor que 5");
}

// Desafio IF ELSE 4

let pontA = 30;

if(pontA > 100){
    console.log("Sua pontuação era 100 e agora é: " + (pontA += 10))
} else {
    console.log("Sua pontuação era: " + pontA + " e agora é: " + (pontA -= 5))
}

// Desafio IF ELSE 5

let jogador1 = 60;
let jogador2 = 60;

if(jogador1 > 50 && jogador2> 50){
    console.log("Ambos são fortes");
} else if (jogador1 > 80 || jogador2 > 80){
    console.log("Temos um Líder");
} else if(jogador1 >= 30 && jogador2 >= 30){
    console.log("Nenhum foi eliminado");
}

let dif = Math.abs(jogador1 - jogador2)

if(dif >= 10){
    console.log("Desnível na competição")
} else{
    console.log("Jogo equilibrado")
}

// Desafio IF ELSE EXTRA

/* Desafio: Sistema de Avaliação de Compras
Você está criando um sistema de avaliação para um cliente, onde sua pontuação será ajustada com base no valor das compras realizadas. A pontuação inicial do cliente é 50, e ela pode ser alterada dependendo dos valores das compras feitas.

Regras:

Pontuação Base: O cliente começa com uma pontuação de 50.
Compras: O cliente realiza 3 compras. A pontuação será ajustada conforme o valor de cada compra:
Se a compra for superior a 200, a pontuação aumenta em 10% do valor da compra.
Se a compra for menor ou igual a 50, a pontuação diminui 5 pontos.
Se a compra estiver entre 50 e 200, a pontuação aumenta 5% do valor da compra.
Avaliação Final: Após todas as compras, a pontuação final será avaliada:
Se a pontuação for superior a 80, o cliente será considerado "acima da média".
Se a pontuação for inferior a 50, o cliente será considerado "abaixo da média".
Caso contrário, o cliente será considerado "dentro da média".
Objetivo: Calcule a pontuação final do cliente com base nas regras acima e exiba uma mensagem informando se o cliente está "acima da média", "dentro da média" ou "abaixo da média".
*/ 
let clienteP = 50;
let compra1 = 210, compra2 = 240, compra3 = 260;
let pCompra;

console.log("Sua pontuação incial: "+ clienteP)


if(compra1 > 200){
 pCompra = compra1 * 0.1;
clienteP += pCompra
} else if (compra1 <= 50){
 clienteP -= 5;
} else if (compra1 >= 50 && compra1 <=200) {
pCompra = compra1 * 0.05;
clienteP += pCompra
}

if(compra2 > 200){
    pCompra = compra2 * 0.1;
    clienteP += pCompra
} else if (compra2 <= 50){
    clienteP -= 5;
} else if (compra2 >= 50 && compra2 <=200) {
    pCompra = compra2 * 0.05;
    clienteP += pCompra
}

if(compra3 > 200){
    pCompra = compra3 * 0.1;
    clienteP += pCompra
} else if (compra3 <= 50){
    clienteP -= 5;
} else if (compra3 >= 50 && compra3 <=200) {
    pCompra = compra3 * 0.05;
    clienteP += pCompra
}

if(clienteP > 80){
    console.log("Pontuação final: " + clienteP + ". Cliente acima da média");
} else if(clienteP < 50){
    console.log("Pontuação final: " + clienteP + ". Cliente abaixo da média");
} else{
    console.log("Pontuação final: " + clienteP + ". Cliente dentro da média");
}

/* Desafio: Sistema de Níveis de Energia para Atletas
Você está criando um sistema para calcular o nível de energia de um atleta com base em seu desempenho e descanso. O nível de energia inicial do atleta é 100, e ele pode perder ou ganhar energia conforme as atividades realizadas.

Regras:
Treinos: O atleta faz três treinos diários, e cada um pode afetar a energia da seguinte forma:
Se o treino durar mais de 2 horas, a energia diminui em 15% do tempo do treino.
Se o treino durar entre 1 e 2 horas, a energia diminui em 10% do tempo do treino.
Se o treino for menor que 1 hora, a energia diminui em 5 pontos fixos.
Descanso: Se o atleta dormir mais de 7 horas, ele recupera 20 pontos de energia. Caso contrário, ele não recebe bônus de recuperação.
Avaliação Final: Após os cálculos, determine o nível de energia do atleta:
Se a energia final for maior que 80, ele está em "Alto Desempenho".
Se a energia final for menor que 30, ele está "Esgotado".
Caso contrário, ele está em "Energia Moderada". */

let energiaAtleta = 100;

const treino1 = 3, treino2 = 2.5, treino3 = 1;
let descanso = 8;

console.log("A energia do atleta total é de: " + energiaAtleta);
if(treino1 > 2){
    energiaAtleta -= energiaAtleta * 0.15;
} else if(treino1 >= 1 && treino1 <=2){
    energiaAtleta -= energiaAtleta * 0.10;
} else {
    energiaAtleta -= 5;
}

if(treino2 > 2){
    energiaAtleta -= energiaAtleta * 0.10;
} else if(treino2 >= 1 && treino2 <=2){
    energiaAtleta -= energiaAtleta * 0.10;
} else {
    energiaAtleta -= 5;
}

if(treino3 > 2){
    energiaAtleta -= energiaAtleta * 0.15;
} else if(treino3 >= 1 && treino3 <=2){
    energiaAtleta -= energiaAtleta * 0.10;
} else {
    energiaAtleta -= 5;
}

if(descanso >= 8) {
    console.log("Energia sem descanso: " + energiaAtleta)
    energiaAtleta += 20;

    console.log("Energia com descanso: " + energiaAtleta)
} else {
    console.log("Energia sem descanso: " + energiaAtleta)
}

let avaliacaoFinal = energiaAtleta;

if(avaliacaoFinal > 80){
    console.log("A avaliação final do atleta é: " + avaliacaoFinal + ". Com energia total de: " + energiaAtleta + ". O atleta está em Alto Desempenho");
} else if (avaliacaoFinal < 30){
    console.log("A avaliação final do atleta é: " + avaliacaoFinal + ". Com energia total de: " + energiaAtleta + ". O atleta está Esgotado");
} else{
    console.log("A avaliação final do atleta é: " + avaliacaoFinal + ". Com energia total de: " + energiaAtleta + ". O atleta está com desempenho moderado");
}