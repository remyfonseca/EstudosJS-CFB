"use strict";
let num = [10,20,30,40,50];


// Indíce
for(let n in num) {
    console.log(n)
}

// Valor
for(let n of num) {
    console.log(n)
}

// Desafio 1 - For in of 
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (let k in person){
    console.log(k, person[k])
}

for(let d of Object.values(person)){
    console.log(d)
}


// Desafio 2 - For in of

let nums = [5,15,25,35];
let soma = 0;

for(let c of nums){
    console.log(c)
    soma += c;
}

console.log("Soma elementos do array: " + soma)

// Desafio 3 - For in of

let lista1 = [
    {id: 1, name: "Remy1",score: 100},
    {id: 2, name: "Remy2", score: 50}
];

let lista2 = [
    {id: 1, name: "Remy1",score: 50},
    {id: 2, name: "Remy2", score: 100}
];

for(let x in obj1 && obj2){
    console.log(lista1[x])
    console.log(lista2[x])
}