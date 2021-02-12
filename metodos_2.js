const numeros = [1, 2, 3, 4, 5];

numeros.splice(1, 1); // primeiro valor é a casa que vc quer excluir, o segundo valor será quantos números apos essa casa vc vai querer excluir. No caso do exemplo só o 2 vai ser excluído, pois ele é o índice 1 e só 1  vai ser excluído.
console.log(numeros);

numeros.splice(1,2); // agora ele pegou a casa 1 que virou o numero 3 e excluiu 2 casas... 3 e 4.. por tanto resultado é 1 e 5.

console.log(numeros);


numeros.pop(); // remove o ultimo elemento do array... 
console.log(numeros);

// ambos os métodos ALTERARAM O ARRAY 
