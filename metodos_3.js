const numeros = [10, 20, 30, 40, 50, 60];

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array); 
} // elemento indice e array é a ordem que a function exibe o array no foreach... Na primeira coluna eles falam dos elementos... depois os indeces e por fim o array inteiro.

numeros.forEach(paraCadaElemento);

// também da pra ser fazer assim

numeros.forEach(function(elemento) {
    console.log(elemento);
}); // ele vai mostrar todos os elementos do array


numeros.forEach(function(elemento,indice) {
    console.log(indice);
}); // msm não precisando eu tenho que passar o elemento como paramento se eu quiser acessar o indice ou o array.. mas na hora do console é só não chamar ele.



/*for(let n of numeros) {
    console.log(n);
} */


/*for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
} */

