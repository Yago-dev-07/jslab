/*
let nome = "Carlos";
let idade = 24;
const aprovado = true;
const endereco = undefined;
const observacao = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);
console.log(typeof endereco);
console.log(typeof observacao);

console.log("-------------------------")

nome = "Ana";
idade = 21;

const mensagem = `Nome: ${nome} | Idade: ${idade}`;

console.log(mensagem);

console.log("-------------------------")

let preco = 120;
let quantidade = 3;

let subtotal = preco * quantidade;

console.log(subtotal);

const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("-------------------------")

preco = 120;
quantidade = 3;
let percentualDesconto = 10;

subtotal = preco * quantidade;

let desconto = subtotal * percentualDesconto/100;

const total = subtotal - desconto;

console.log(`Subtotal: ${subtotal}`);
console.log(`Desconto: ${desconto}`);
console.log(`Total: ${total}`);

console.log("-------------------------")

const resultado1 = 10 + 5 * 2;
const resultado2 = (10 + 5) * 2;

console.log(resultado1);
console.log(resultado2);

idade = 18;

console.log(idade > 18);
console.log(idade >= 18);
console.log(idade < 18);
console.log(idade <= 18);

console.log("-------------------------")

quantidade = 10;

console.log(quantidade === 10);
console.log(quantidade !== 10);
console.log(10 === "10");

console.log("-------------------------")

idade = 20;
const possuiIngresso = true;

const podeEntrar = idade >= 18 && possuiIngresso;

console.log(podeEntrar);

const ehProfessor = false;
const ehAluno = true;

const possuiAcesso = ehProfessor || ehAluno;
console.log(possuiAcesso);

*/

// Exercício — Compra 

const nomeProduto = "Laranja";
const preco = 5.70;
const quantidade = 8;
const percentualDesconto = 15; 
let disponbilidade = 20;

quantidadeUsada = disponbilidade - quantidade;
const subtotal = preco * quantidadeUsada;
const desconto = subtotal * (percentualDesconto/100);
const valorFinal = subtotal - desconto;

console.log(`Subtotal: ${subtotal}`);
console.log(`Desconto: ${desconto}`);
console.log(`Valor Final: ${valorFinal}`);

disponbilidade = false;

console.log(typeof nomeProduto);
console.log(typeof desconto);
console.log(typeof valorFinal)

