//Crea una función que calcule el perímetro de un círculo dado el rádio 
console.log("perímetro de un círculo dado el rádio (5)");
function perimetro (radio) {
    return Math.PI * radio * 2;
}
console.log(perimetro(5));
console.log("------------------------------------------------------");
//Crea una función que calcule el área de un círculo dado el rádio 
console.log("área de un círculo dado el rádio (4)");
function area (radio) {
    return Math.PI * radio ** 2;
}
console.log(area(4));
console.log("------------------------------------------------------");

//Crea una función que calcule el perímetro de un cuadrado dado el lado
console.log("perímetro de un cuadrado dado el lado (2)");
function perimetroCuadrado (lado) {
    return lado * 4;
}
console.log(perimetroCuadrado(2));
console.log("------------------------------------------------------");

//Crea una función que calcule el área de un cuadrado dado el lado
console.log("área de un cuadrado dado el lado (2)");
function areaCuadrado (lado) {
    return lado ** 2;
}
console.log(areaCuadrado(2));
console.log("------------------------------------------------------");

//Crea una función que calcula la hipotenusa de un triángulo rectángulo dados los lados a,b
console.log("hipotenusa de un triángulo rectángulo dados los lados a,b (3,4)");
function hipotenusa (a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
console.log(hipotenusa(3, 4));
console.log("------------------------------------------------------");
