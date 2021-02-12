const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100; // o indice 0 que seria o numero 1 vai AlTERAR 100
numeros.push(6); // vai adicionar ao final o numero 6
 

console.log(numeros.includes(10)); // verifica se o numero passado esta no array... no caso o 10 não esta ... resultado será false

console.log(numeros.indexOf(4)); // verifica se existe algum numero 4 no array

console.log(numeros.join(" - ")); // separador
 console.log(numeros);

 const numeros2 = numeros.concat(7, 8, 9); // gera um novo array
 console.log(numeros2);