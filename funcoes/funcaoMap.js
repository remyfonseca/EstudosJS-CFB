const cursos = ['HTML', 'CSS', 'Javascript', 'React', 'PHP'];

cursos.map((el,i)=>{
    console.log("Curso: " + el + " - Posição do Curso: " + i)
})

const converterInt = (e)=> {return parseInt(e)}


const dobrar=(e)=> {return e*2}
 


let num = ['1','2','3','4'].map(converterInt)
console.log(num)


// 

const numeros = [2,4,6,8];
console.log(numeros)

const novosNumeros = numeros.map((el)=>{
    el *= el
    return el
})

console.log(novosNumeros)

//

const nomes = ["remy", "maria", "ana", "julia", 123];
console.log(nomes)
const nomesM = nomes.map((el,i)=>{
    if(typeof(el) !== 'string'){
        console.log(`Erro no índice ${i}: O elemento não é uma string!`);
    } else{
        el = el.toUpperCase();
    }

    return el
})

console.log(nomesM)