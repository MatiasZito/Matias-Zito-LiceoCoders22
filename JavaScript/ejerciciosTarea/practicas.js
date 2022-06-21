//-------------------------Objetos-----------------------------------------
let coche = {
  marca: "ford",
	modelo: "Mustang",
  color: "rojo",
	año: 1970,
	revisiones: [
		{
			fecha: "",
			taller: "",
    }
  ]
};
coche.marca = "Ford";
coche["modelo"] = "Fiesta";
console.log("------------------------------------------------------");

//-------------------------Funciones-----------------------------------------  
function printHola1(){
	console.log("hola");
}
printHola1();
printHola1();
printHola1();
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function printHola2(name){
	console.log("hola" +  " "  + name);
}
printHola2("Jacobo");
printHola2("Paula");
printHola2("Mati");
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function doble(num){
	return console.log(2*num);
}
doble(10);
doble(30);
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function printHola3(){
	console.log("hola" +  " "  + nombre);
}

const nombre = "Juan"
printHola3();
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // ¡misma variable!
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
  varTest();
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
letTest()
console.log("------------------------------------------------------");

//---------------------------------------------------------------------------------------------------------------------  
function squareAndMultiply(num1, num2){
	function cuadrado(x){
		return x * x;
    }
    return cuadrado(num1) * cuadrado(num2);
}
console.log (squareAndMultiply(5,8))
console.log("------------------------------------------------------");

//-------------------------While-----------------------------------------   

let n = 0;
while(n <= 5){
	console.log("hola");
	n++;
}
console.log("------------------------------------------------------");

//-------------------------Loops While-----------------------------------------   
const names = ["pepe", "juan","pedro"];
let i = 0;
while (true){
	if(names[i] === "juan"){
		console.log("fin");
		break;
  }
  i++;
}
console.log("------------------------------------------------------");

//-------------------------Loops for-----------------------------------------   

for (let i = 0; i < 10; i++){
	console.log(i);
}
console.log("------------------------------------------------------");

const nombres = ["David L", "Harsh", "Matias", "Yeva", "David C", "Carmelo", "Andrea"]

for(let i=0; i<nombres.length; i++){
	console.log(nombres[i]);
}

