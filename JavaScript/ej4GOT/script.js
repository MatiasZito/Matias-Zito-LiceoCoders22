/*Pagina listado de casas de GOT.
Crear un array con un objeto para cada personaje con (casa, nombre y apellido).
Recorrer el array y mostrar estos datos en fichas en html.*/

let personajes_json = (personajes);

function gotToHtml(ciudad,nombre,apellido){
    got = `<div class="game, caja">`;
    got += `<div> <b>ciudad</b>: ${ciudad} </div>`
    got += `<div> <b>nombre</b>: ${nombre} </div>`
    got += `<div> <h2>apellido</h2>:  ${apellido} </div>`
    got += `</div>`;
    return got;
}

//Otra forma
/*function gotToHtml(casa,nombre,apellido){
    got = `<div class="game, caja"><div> casa: ${casa} </div><div> casa: ${nombre} </div><div> casa: ${apellido} </div></div>`;
    return got;
}*/

gotHtml = "";

for ( let i = 0; i < personajes_json.length; i++) {
    ciudad = personajes_json [i].ciudad;
    nombre = personajes_json[i].nombre;
    apellido = personajes_json[i].apellido;
    gotHtml += gotToHtml(ciudad,nombre,apellido);
}

document.querySelector(".game .caja").innerHTML = gotHtml;

    