function teste1(){
    let n1 = 10, n2 = 20;
    let soma = n1+n2;
    console.log(soma);
}

for (let i=0;i<10;i++){
    teste1();
}


function teste2(){
    let num1 = 10, num2 = 25;
    let res = num1+num2;

    if(res % 2 == 0){
        return "Par";
    } else {
        return "Impar";
    }
    
}

console.log(teste2())
console.log(teste2())
console.log(teste2())

// Desafio 1 - Function

function teste3(){
    console.log("Contagem Crescente: ")
    for(let i=0; i<=5;i++){
        console.log(i);
    }
    console.log("Contagem Decrescente: ");
    let j = 5
    while( j >= 1){
        console.log(j)
        j--;
    }
}

teste3()

// Desafio 2 - Function

function teste4(){
    let soma = 0;
    let num = 1;

    do{
        soma+=num;
        num++
    } while(num<=10);

    console.log("Soma: " + soma)
}

teste4()


function teste5(n1,n2){
   return n1+n2
}

console.log(teste5(10,20));


let valor = 0;
console.log("Valor inicial: " + valor)
function teste6(v){
    return valor+v
}

valor = teste6(10);
console.log(valor)

valor = teste6(20);
console.log(valor);

valor = teste6(30);
console.log(valor)

// Desafio 3 - Function

function parImpar(){
    console.log("Pares: ")
    for(let i = 0; i<= 10; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    
    }
    console.log("Impares: ")
    let j = 0
    while( j <= 9){
        if(j % 2 !== 0){
            console.log(j)
        }
        j++;
    }
}

parImpar();

// Desafio 4 - Function

function multiAcumulativa(){
    let num = 1;
    let contador = 1;

    do {
        num *= contador;
        contador++;
    } while(contador <= 5)

    console.log("Valor acumulado: " + num)
}

multiAcumulativa();

// Desafio 5 - Atualização de valor

let contador = 1;

function addValor(){
    contador+= 3;

    return contador;
}

console.log(addValor());
console.log(addValor());
console.log(addValor());
console.log(addValor());
console.log(addValor());