console.log('Hello World');

function datosDelJason(){
	let episodios_json = JSON.parse(rym);
	return episodios_json._embedded.episodes;
}

console.log(datosDelJason ());

function rickAndMortialHTML(episode) {
	rick = `<div class="cajaPadre, cajaContenedoraDeInformacion">\
                    <div class="titulo"> ${episode.name}</div>\
                    <div class="imagen"><img src="${episode.image}" alt="${episode.name}"></div>\
                    <div class="season">temporada: ${episode.season}</div>\
                    <div class="descripcion"><h4>Descripcion:</h4>${episode.summary}</div>\
                    <div class="rating">rating</div>\
                </div>\
            </div>` ;	
	return rick;
}

rickAndMorti = "";

for (let i = 0; i < datosDelJason().length; i++) {
	season = datosDelJason()[i].season;
	name = datosDelJason()[i].name;
	number = datosDelJason()[i].number;
	summary = datosDelJason()[i].summary;
	image = datosDelJason()[i].image;
	rickAndMorti += rickAndMortialHTML({season, name, number, summary, image});
}

document.querySelector("content").innerHTML = rickAndMorti;


// let boton         = document.getElementById("btnMain");
// boton.onclick     = () => {console.log("Click")};
