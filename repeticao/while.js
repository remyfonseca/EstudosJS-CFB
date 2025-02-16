// Fatorial

let n = 10;
let fat= 1;

while(n>=1){
    fat *= n;
    n--

}
console.log(fat)


// Desafio 1 - While

let num = 10;
let soma = 0;
while(num>=0){
    if(num % 2 == 0){
        soma += num;
    }
    num--;
}

console.log("Soma dos pares: " + soma)

// Desafio 2 - While

let num1 = 5;

while(num1 >= 0 && num1 <=5){
    console.log(num1)
    num1--;
}

// Desafio 3 - While
let nummP = 10;
let i = 0;
let contP = 0;

while(i <= nummP){
    if(i % 2 == 0){
        contP++;
    }
    i++;
}

console.log("Total de numeros dívisiveis por 2: " + contP);