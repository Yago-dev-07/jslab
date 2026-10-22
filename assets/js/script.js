function exibirSaudacao() {
    console.log("Olá!");
}

exibirSaudacao();

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirNome("Marina");
exibirNome("Carlos");
exibirNome("João");

function calcularTotal(preco, quantidade) {
    return preco * quantidade;

}

const totalPedido = calcularTotal(50, 3);

console.log(totalPedido);

// Exercício — Desconto

/*
function calcularDesconto (valor, percentual) {
    return valor * (percentual/100);
}

let valor = 150;
const desconto = calcularDesconto(100, 25);

const total = valor - desconto;

console.log(total);
*/

function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularDesconto(valor, percentual) {
    return valor * percentual / 100;
}

const subtotal = calcularSubtotal(100, 3);
const desconto = calcularDesconto(subtotal, 10);
let total = subtotal - desconto;

console.log(total);

// Exercício — Situação acadêmica

function verificarSituacao(nota, frequencia) {
    if (nota >= 60 && frequencia >= 75) {
        console.log("Aluno aprovado");
    } else {
        console.log("Aluno reprovado");
    }
}

const desempenhoAluno = verificarSituacao(70, 78);

console.log(desempenhoAluno);



function somar(a, b) {
    return a + b;
}

total = somar(4,3);
console.log(total);

function calcularValorfinal (preco, quantidade, percentualDesconto) {
    const subtotal = preco * quantidade;

    const desconto = subtotal * percentualDesconto / 100;

    const total = subtotal - desconto;

    return total;
}

const resultado = calcularValorfinal(80, 3, 10);

console.log(resultado);

function calcularMedia(nota1, nota2, nota3) {
    const total =
        nota1 + nota2 + nota3;

    const media =
        total / 3;

    return media;
}

console.log(calcularMedia(70, 80, 90));

