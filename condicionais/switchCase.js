let colocacao = 5;


switch(colocacao){
    case 1:
        console.log("Primeiro Lugar");
        break;
    case 2:
        console.log("Segundo Lugar");
        break;
    case 3:
        console.log("Terceiro Lugar");
        break;
    case 4: case 5: case 6:
        console.log("Prêmio de participação");
        break
    
    default: 
        console.log("Não subiu ao pódio");
        break
} 

// Desafios Switch Case

let valor1 = 10;
let valor2 = 0;
let operacao = "/";

let resultado;

switch(operacao){
    case "+":
        resultado = valor1 + valor2;
        console.log("A adição resulta em: " + resultado)
        break;
    case "-":
        resultado = valor1 - valor2;
        console.log("A subtração resulta em: " + resultado)
        break;
    case "*":
        resultado = valor1 * valor2;
        console.log("A multiplicação resulta em: " + resultado)
        break;
    case "/":
        if(valor2 == 0){
            console.log("Erro: Divisão por Zero");
        } else{
            resultado = valor1 / valor2;
            console.log("A divisão resulta em: " + resultado)
        }
        
        break;    
    default:
        resultado = "Operação Inválida!";
        console.log(resultado)
        break
}

// Desafio 2 - Switch Case

let idadeU = 20;

switch(true){
    case (idadeU >= 0 && idadeU <= 12):
        console.log("A categoria é criança")
        break
    case (idadeU > 12 && idadeU <= 17):
        console.log("A categoria é Adolescente")
        break
    case (idadeU > 17 && idadeU <= 59):
        console.log("A categoria é Adulto")
        break
    case (idadeU > 59):
        console.log("A categoria é Idoso")
        break
    default:
        console.log("Valor inválido!")
}

let valorReal = 10;
let conversao = "JPY";

let res;

switch(conversao){
    case "USD":
        res = valorReal / 5.72
        console.log("Valor em Real: " + valorReal + ". Valor Convertido (USD): " + res.toFixed(2));
        break
    case "EUR":
        res = valorReal / 5.90
        console.log("Valor em Real: " + valorReal + ". Valor Convertido (EUR): " + res.toFixed(2));
        break
    case "JPY":
        res = valorReal / 0.038
        console.log("Valor em Real: " + valorReal + ". Valor Convertido (JPY): " + res.toFixed(2));
        break
    default:
        if(valorReal <= 0){
            console.log("O valor tme que ser maior que 0");
        }
        break
}