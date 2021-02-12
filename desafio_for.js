// a partir do 9 ir mostrando os números de forma decremente de 2 em 2

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for(i = 8; i >= numeros[1]; i = i-2){
    console.log(i, numeros[i]);
}


//resolução do professor

for(let i = numeros.length - 2; i >= 0; i -= 2) { // a ordem importa é  -=
    console.log(numeros[i]);
} 