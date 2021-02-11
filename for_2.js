const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = ""

// foreach -> para cada elemento
for(let nota of notas) {
    console.log(nota);
}

//percorrendo os indices para chegar aos valores
for(let nota of notas) {
    valores += nota + " ";
}

console.log(valores);


let indices =  "";
//pegando somente os indices do array
for(let indice in notas) {
    	indices +=  indice + " ";
}

console.log(indices);

// se vc usar o "OF" ele vai acessar os valores e se usarmos o IN ele vai pegar os indices