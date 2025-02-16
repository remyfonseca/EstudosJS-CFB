// Desafio 1 - Do While
let n = 10;
let cont = 1

do{
    console.log(cont)
    cont++

}while(cont<=n)

console.log("Fim")

// Desafio 2 - Do While

let n2 = 5;
let cont2 = 1;
let soma = 0;

do {
    soma += cont2;
    cont2++
    console.log(soma)
} while(cont2 <= n2)

console.log("Fim")

// Desafio extra 

let num1 = 3;
let p = 0;

do {
    if(num1<0){
        console.log("Valor negativo")
        break;
    } else if(num1 % 2 == 0){
        num1++
        continue;
    }

    p+= num1;
    num1++;
} while(num1 < 15);

console.log("Soma total dos valores impares: " + p)