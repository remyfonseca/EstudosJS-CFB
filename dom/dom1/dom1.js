const query_divTodas = [...document.querySelectorAll("div")];
const query_cursoTodos = [...document.querySelectorAll(".curso")];
const query_cursoC1 = [...document.querySelectorAll(".c1")];
const query_cursoC2 = [...document.querySelectorAll(".c2")];
const query_cursoEspecial = document.querySelector("#c1");

console.log(query_divTodas);
console.log(query_cursoTodos);
console.log(query_cursoC1);
console.log(query_cursoC2);
console.log(query_cursoEspecial);



query_cursoTodos.map((el)=>{

    el.addEventListener("click", (evt)=>{
        const el = evt.target;
        el.classList.add("destaque");
        el = alert(`O ${el.innerHTML} foi clicado`);
    })
})