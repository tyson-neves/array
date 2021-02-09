
//              0    1    2   3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];


console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[2]);
console.log(notas[600]); // undefined pq não foi passado esse array

notas[4] = 8.7; // altera o valor do array 4, mesmo sendo uma const, ja que o conteúdo do array é independente

console.log(notas);
