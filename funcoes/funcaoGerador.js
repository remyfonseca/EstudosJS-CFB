function* contador(){
    let i=0;

    while(true){
        yield i++
        if(i>5){
            break
        }

    }
}

const itc = contador();

for(let c of itc){
    console.log(c)
}


function* perguntas(){
    const nome = yield "Qual seu nome?"
    const esporte = yield "Qual seu esporte favorito?"

    return "Seu nome é: " + nome + ", seu esporte favorito é" + esporte
}

const itp = perguntas();

console.log(itp.next().value);
console.log(itp.next('Remy').value);
console.log(itp.next('Futebol').value);

//

function* geradorPares(){
    let i = 0;

    while(i <= 10){
        yield i;
        i+=2;
    }
}

const itpp = geradorPares();
console.log(itpp.next().value);
console.log(itpp.next().value);
console.log(itpp.next().value);

function* historinha(){
    const nome = yield "Qual é o nome do personagem principal?";
    const lugar = yield `Onde ${nome} estava`
    const evento = yield `O que aconteceu com ${nome} em ${lugar}`


    return `Era uma vez ${nome}, que estava em ${lugar}. De repente ${evento}`
}

const it = historinha();

console.log(it.next().value);
console.log(it.next("Remy").value);
console.log(it.next("na web").value);
console.log(it.next("encontrou um vírus").value);