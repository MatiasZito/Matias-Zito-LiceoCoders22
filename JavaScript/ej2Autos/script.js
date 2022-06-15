/*Pagina listado autos.
Crear un array con un objeto para cada auto con (marca, modelo, color y gama).
Recorrer el array y mostrar estos datos en fichas en html.*/

let automoviles_json = (automoviles);

function auto_to_html(marca,modelo,color,gama){
    auto = `<div class="auto, caja">`;
    auto+= `<div>Marca: ${marca}</div>`;
    auto+= `<div>Modelo: ${modelo}</div>`;
    auto+= `<div>Color: ${color}</div>`;
    auto+= `<div>Gama: ${gama}</div>`;
    auto+= `</div>`;
    return auto;
}

autos_html = "";

for (let i = 0; i < automoviles_json.length; i++) {
    console.log(automoviles_json[i]);
    marca = automoviles_json[i].marca;
    modelo = automoviles_json[i].modelo;
    color = automoviles_json[i].color;
    gama = automoviles_json[i].gama;
    autos_html += auto_to_html(marca,modelo,color,gama);
}

document.querySelector(".auto, .caja").innerHTML = autos_html
