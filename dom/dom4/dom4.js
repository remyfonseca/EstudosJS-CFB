const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");
const cursos = ["teste"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes");
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois");
const nomeCurso = document.getElementById("nomeCurso");
let indice = 0;

const criarNovoCurso = (curso) =>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c"+ indice);
    novoElemento.setAttribute("class", "curso c1");
    novoElemento.innerHTML = curso;


    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");


    const rb = document.createElement("input");
    rb.setAttribute("type", "radio");
    rb.setAttribute("name", "rb_curso");

    comandos.appendChild(rb);
    
    novoElemento.appendChild(comandos);
    
    return novoElemento;
}

cursos.map((el, i)=>{
    const novoElemento = criarNovoCurso(el);
    caixaCursos.appendChild(novoElemento);
    indice++;
})

const radioSelecionado = () =>{
    const todosRadios = [...document.querySelectorAll("input[type='radio']")];
    const radioSelecionado = todosRadios.filter((el) => {
        return el.checked;
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", ()=>{
    const rs = radioSelecionado();

    try {
        const cursoSelecionado = rs.parentNode.parentNode.textContent;
        alert("Curso selecionado: " + cursoSelecionado)
    } catch (error) {
        alert("Selecione um curso");
    }
    
})

btnRemoverCurso.addEventListener("click", ()=>{
    const rs = radioSelecionado();

    try {
        const cursoSelecionado = rs.parentNode.parentNode;
        cursoSelecionado.remove();
    } catch (error) {
        alert("Selecione um curso");
    }

})


btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    const rs = radioSelecionado();

    try {
        if(nomeCurso.value !== ""){
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado);
        } else{
            alert("Digite o nome do curso")
        }

    } catch (error) {
        alert("Selecione um curso");
    }

})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt)=>{
    const rs = radioSelecionado();

    try {
        if(nomeCurso.value !== ""){
            const cursoSelecionado = rs.parentNode.parentNode;
            const novoCurso = criarNovoCurso(nomeCurso.value);
            caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
        } else{
            alert("Digite o nome do curso")
        }

    } catch (error) {
        alert("Selecione um curso");
    }

})