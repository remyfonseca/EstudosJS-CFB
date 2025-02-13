/* 
+ - / * % ++ -- += -=
*/

// SOMA DE IDADES

let idade1 = 20;
let idade2 = 25;

let somaIdades = idade1 + idade2;
console.log(somaIdades);

// PREÇO DE PRODUTOS

let precoOriginal = 100;
let desconto = 20;

let precoComDesconto = precoOriginal - desconto;
console.log(precoComDesconto);

// MULTIPLICAÇÃO DE QUANTIDADE E PREÇO

let quantidade = 5;
let precoUnitario = 10;

let precoTotal = quantidade * precoUnitario;
console.log(precoTotal);

// DIVISÃO TOTAL DE VENDAS

let totalVendas = 1500;
let vendedores = 3;

let totaldeVendas = totalVendas / vendedores;
console.log(totaldeVendas);

// RESTO DA DIVISÃO

let dividendo = 17
let divisor = 4 

let resto = dividendo % divisor;
console.log(resto);

// CONTAGEM DE ITENS

let itens = 0;

itens++;
console.log("Primeira contagem: " + itens);

itens++;
console.log("Segunda contagem:" + itens);

// SALDO DE CONTA

let saldo = 500;
let deposito = 200;
let saque = 100;

let saldoFinal = (saldo+=deposito) - saque;
console.log(saldoFinal);

// DESAFIO OPERADORES

/*Você é responsável por calcular as despesas mensais de uma pessoa. As despesas incluem aluguel, alimentação, transporte e entretenimento. O objetivo é calcular o total das despesas mensais e o saldo final após um salário de salarioMensal.

Requisitos:
Você tem as seguintes variáveis:

aluguel: 800
alimentacao: 400
transporte: 150
entretenimento: 200
salarioMensal: 2500
Utilize os operadores apropriados para:

Somar as despesas mensais (aluguel + alimentacao + transporte + entretenimento).
Calcular o saldo restante após as despesas (salarioMensal - totalDespesas).
Mostre o resultado no console.*/

let aluguel = 800;
let alimentacao = 400;
let transporte = 150;
let entretenimento = 200;
let salarioMensal = 2500;

let despesasMensais = aluguel + alimentacao + transporte + entretenimento;
let saldoRestante = salarioMensal - despesasMensais;

console.log("O saldo restante é de: " + saldoRestante);


// DESAFIO OPERADORES 2

/* Você recebeu a tarefa de criar um conversor de temperatura de Celsius para Fahrenheit e vice-versa.

Fórmulas:
De Celsius para Fahrenheit: F = (C * 9/5) + 32
De Fahrenheit para Celsius: C = (F - 32) * 5/9
Você tem as seguintes variáveis:

tempCelsius: 25
tempFahrenheit: 77
Calcule e exiba o valor da conversão para ambas as direções. */

let tempCelsius = 25;
let tempFahrenheit = 77;

let celsiusParaFahrenheit = (tempCelsius * 9/5) + 32;
let fahrenheitParaCelsius = (tempFahrenheit - 32) * 5/9;

console.log("Celsius para Fahrenheit: " + celsiusParaFahrenheit);
console.log("Fahrenheit para Celsius: " + fahrenheitParaCelsius);