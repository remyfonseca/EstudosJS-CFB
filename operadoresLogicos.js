// // && - and |  || - or | ! - not

// let n1 = 10, n2 = 5, n3 = 15, n4 = 2;

// console.log(n1 > n2 && n1 >= n2)

// // Desafio Operadores Logicos - 1

// let num1 = 12, num2 = 8;

// console.log(num1 > num2 && num1 != num2);

// // Desafio Operadores Logicos - 2

// let valor1 = false, valor2 = true;

// console.log(valor1 || valor2);

// // Desafio Operadores Logicos - 3

// let a = 10, b = 5, c = 8, d = 12;

// console.log(a > b && c < d);
// console.log(a < b || c > d);
// console.log(!(a > b))

// // Operadores BitWise
// // & | ^ >> << 
// let valorN1 = 22, valorN2 = 12;

// let res = valorN1 >> 2

// console.log(res);

// // Pré / Pós Incremento

// let n = 10;

// console.log(++n);

// console.log(n);

// // Operador Térnario

// n  =  10;

// let resultado = (!(n%2) ? "Par": "Impar");
// console.log(resultado);

// // Operador Typeof

// let v1 = 10, v2= "10", v3 = v1 === v2, v4 = {nome: "Remy"};

// console.log("Valor " + v1 + " - Tipo: " + typeof(v1));
// console.log("Valor " + v2 + " - Tipo: " + typeof(v2));
// console.log("Valor " + v3 + " - Tipo: " + typeof(v3));
// console.log("Valor " + v4 + " - Tipo: " + typeof(v4));

// // Operador Spread

// let b1 = [10,20,30];
// let b2 = [11,22,33,55,77];
// let b3 = [...b1,...b2]

// // console.log("b1: " + b1);
// // console.log("b2: " + b2);
// console.log("b3: " + b3);

// const jogador1 = {nome: "Remy", energia: 100, vidas: 3, magia:150}
// const jogador2 = {nome: "Remy2", energia: 95, vidas: 5, forca: 80}
// const jogador3 = {...jogador1, ...jogador2}

// console.log(jogador3)



// // Desafio Operadores Bitwise 

let valorA = 15, valorB = 25, valorC = 20, valorD  = 35;

console.log("Operação Bitwise 1: " + (valorA & valorB));
console.log("Operação Bitwise 2: " + (valorA >> 2));
console.log("Operação Bitwise 3: " + (valorB << 1));
console.log("Operação Bitwise 4: " + (valorC | valorD));
console.log("Operação Bitwise 5: " + (valorD ^ valorC));

// Desafio Pré e Pós Incremento

let numX = 15;

console.log("Valor Original: " + numX)
++numX;
console.log("Valor Pre incremento: " + numX)

// Desafio Operador Ternário 

let numN = -10;

console.log(numN === 0 ? "Zero" : (numN > 0 ? "Positivo" : "Negativo"));

// Desafio Operador Typeof

let vari1 = 10, vari2 = "20", vari3 = vari1 > 0; 
const vari4 = {nome: "Remy"}, vari5 = [10,20,30];

console.log("vari1: " + vari1 +  " TIPO: " + typeof(vari1))
console.log("vari2: " + vari2 +  " TIPO: " + typeof(vari2))
console.log("vari3: " + vari3 +  " TIPO: " + typeof(vari3))
console.log("vari4: " + vari4 +  " TIPO: " + typeof(vari4))
console.log("vari5: " + vari5 +  "TIPO: " + typeof(vari5))

// Desafio Operador Spread

const arr1 = [10,20,30];
const arr2 = [40, 50, 60];

const arr3 = [...arr1, ...arr2];
console.log(arr3);