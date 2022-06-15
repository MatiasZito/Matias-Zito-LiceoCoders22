/*Pagina listado de simpsons.
Crear un array con un objeto para cada personaje con (nombre, apellido y edad).
Recorrer el array y mostrar estos datos en fichas en html.*/

let personajes_json = (personajes);

function simpsonsToHtml(nombre,apellido,edad){
    simpsons = `<div class="simpsons, caja">`;
    simpsons+= `<div class="negrita">Nombre: ${nombre}</div>`;
    simpsons+= `<div>Apellido: ${apellido}</div>`;
    simpsons+= `<div>edad: ${edad}</div>`;
    simpsons+= `</div>`;
    return simpsons;
}

simpsonsHtml = "";

for (let i = 0; i < personajes_json.length; i++) {
    nombre = personajes_json[i].nombre;
    apellido = personajes_json[i]. apellido;
    edad = personajes_json[i].edad;
    simpsonsHtml += simpsonsToHtml(nombre,apellido,edad);
}

document.querySelector(".simpsons .caja").innerHTML = simpsonsHtml;