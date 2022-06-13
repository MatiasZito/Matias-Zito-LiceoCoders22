/*Pagina listado alumnos.
Crear un array con un objeto para cada alumno con (nombre, apellidos, edad, ciudad de residencia).
Recorrer el array y mostrar estos datos en fichas en html.*/

alumnos_json = JSON.parse(alumnos);

function alumnoToHtml(nombre, apellido, ciudad, fechaNacimiento){
    alumno = `div class="alumno">`;
    alumno+= `<div>nombre: ${nombre}</div>`;
    alumno+= `<div>apellido: ${apellido}</div>`;
    alumno+= `<div>ciudad: ${ciudad}</div>`;
    alumno+= `<div>fecha Nacimiento: ${fechaNacimiento}</div>`;  
    alumno+= `</div>`;
    return alumno;
}

alumnos_html = "";

for (let i = 0; i < alumnos_json.length; i++) {
    console.log("hola");
    nombre = alumnos_json[i].nombre;
    apellido = alumnos_json[i].apellido;
    ciudad = alumnos_json[i]["Ciudad red"];
    fechaNacimiento = alumnos_json[i]["fecha nacimiento"];
    alumnos_html += alumnoToHtml(nombre, apellido, ciudad, fechaNacimiento);
}

document.querySelector('.alumnos').innerHTML = alumnos_html








