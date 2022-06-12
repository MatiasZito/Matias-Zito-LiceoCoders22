/*-------------Ejercicios Arrays-------------*/

function cuenta () {
    let num = Math.floor(Math.random() * 6) +1;
    return num;
}

let numeros = [];
console.log(numeros);
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());
numeros.push(cuenta());


let frutas = ["Manzana", "Platano"];
console.log(frutas);
console.log (frutas.length);

frutas[0] = "Manzana";

let nuevaLongitud = frutas.push("Naranja") // Añade Naranja al final del array / nuevaLongitud → 3
let ultimo = frutas.pop() // Elimina Naranja de la lista y la guarda en la variable "ultimo"
let primero = frutas.shift() // Elimina Manzana del inicio
let nuevaLongitud2 = frutas.unshift("Fresa") // Añade Fresa al inicio del array / nuevaLongitud → 2
