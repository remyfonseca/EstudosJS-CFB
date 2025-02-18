// const soma = function(v1,v2){
//     return v1+v2;
// }

const soma =(v1,v2)=> {
    return v1+v2;
}

const nome = n =>{return n}

const add = n => n + 10

console.log(soma(10,5));
console.log(nome("Remy"))



const soma2 = (...valores)=>{
    const somar = val =>{
        let res = 0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma2(10,5,15))

//

const mutliplicar = (v1,v2) =>{
    return v1*v2;
}

console.log(mutliplicar(4,5));
console.log(mutliplicar(10,2));

const ehPar  = (v) =>{
    if(v % 2 === 0){
        return true
    } else{
        return false
    }
}

console.log(ehPar(2));
console.log(ehPar(3));