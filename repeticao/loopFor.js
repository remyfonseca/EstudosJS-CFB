// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0 ){
//         console.log("Pares: " + i)
//     } else {
//          console.log ("Impares: "+ i)
//     }
// }

// Desafio 1 - FOR

for(let a = 1; a <= 50; a++){
    if( a % 3 == 0 && a % 5 == 0){
        console.log("Números Múltiplos de 3 e 5: " + a);
    } else if (a % 5 == 0){
        console.log("Números Múltiplos de 5: " + a);
    } else if (a % 3 == 0){
        console.log("Números Múltiplos de 3: " + a);
    } else{
        console.log("Números não é múltiplo de 3 ou 5: " + a)
    }
}


// Desafio 2 - FOR

for(let num = 10; num >= 0; num--){
    console.log("Número atual: " + num)

}

console.log("Fim da contagem")

// Desafio 3 - FOR

for(let numT = 0; numT <= 10; numT++){
    console.log("Tabuada do: " + numT);

    for(let i = 0; i <= 10; i++){
        console.log(numT + " + " + i + " = " + (numT + i));
    }

    console.log("");
}