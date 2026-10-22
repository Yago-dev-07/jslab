/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let contador = 1;

while (contador <= 5) {
    console.log(contador);

    contador++;
}
*/

// Exercício — Processamento de pedidos

const quantidadePedidos = 8;

for (let i = 1; i<=quantidadePedidos; i++) {
    console.log(`Processando pedido ${i}`)
}

// Exercício — Contagem regressiva

for(let j = 10; j>=1; j = j - 1) {
    console.log(j)
}

console.log("Fim")