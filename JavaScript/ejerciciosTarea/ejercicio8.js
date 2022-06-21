//Crea 2 arrays, uno con 5 frutas y el segundo vacío. A continuación crea un bucle que pase las frutas de una en una de un array al otro e imprima en consola los dos listados en cada iteración.
const frutas = ["manzana", "pera", "uva", "naranja", "sandia"];

const chagitoVacio = [];

for(let i = 0; i < frutas.length; i++){
	chagitoVacio.push(frutas[i]);
}

console.log(frutas);
console.log(chagitoVacio);

console.log("------------------------------------------------------");

//