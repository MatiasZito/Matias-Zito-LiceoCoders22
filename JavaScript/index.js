
/*-------------Ejercicio Mensajes-------------*/
/*
alert("Esto es una alerta"); //Muestra una alerta en pantalla con el mensaje que se le pasa.
document.write('Esto es Javascript'); //Muestra un texto en la pagina podemos usarlo para mostrar texto en la pagina
console.log("Esto es un mensaje en la consola"); //Muestra un mensaje en la consola, podemos verlo en la consola de Chrome
*/
/*-------------Variables-------------*/
/*
let a = "Hola";
let b = 20;

console.log(a , b);
*/
/*-------------Negaciones para invertir variables (Boolean)-------------*/
/*
let c = 0;
let d = "nombre";
let e = 56;

let resultadoUno = !c;
let resultadoDos = !d;
let resultadoTres = !e;

console.log(resultadoUno, resultadoDos, resultadoTres);
*/
/*-------------Función y Mostrar mensaje-------------*/
/*
var variable = "Hola";
alert (variable);
*/
/*
let variable = "Hola";
alert (variable);

const variable = "Hola";
alert (variable);
*/


/*-------------Ejercicios Arrays-------------*/
/*
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
*/

/*
let i = 0;
let matias = ""
while (i < 5) {
    matias = matias + "*";
    console.log(matias);
    i++;
}
*/

/*
function fila(k) {
    let j = 0;
    let matias = "";
    while (j < k) {
        matias = matias + "*";
        j++;
    }
    console.log(matias);
}

function pirami (o) {
    let n=5;
    while (n > 0) {
        fila(n);
        n--;
    }
}

pirami(10); 
*/

function piramide (a) {
    let z = 0;
    let x = a;
    while (z < x) {
        let b = 0;
        let c = "";
        while (b < a) {
            c = c + "*";
            b++;
        }
        console.log(c);
        z++;
        a=a-1;
    }
}

piramide (10);

let jx = 1;
function myInvPyramid(myNumber){
    while (jx < myNumber ){
        kx = "+".repeat(myNumber);
        console.log(kx);
            while (jx < myNumber) {
                lx = kx.slice(jx);
                console.log(lx);
                jx++;
            }
    }
}
myInvPyramid(20);
