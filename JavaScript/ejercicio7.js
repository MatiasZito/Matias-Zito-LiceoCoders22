
//Crea un script que imprima un cuadrado de "*" dado el número de la base/altura cuadrado(5)

let m = 0;
while (m < 5) {
    console.log("*****")
    m++;
}

console.log("------------------------------------------------------");

let i = 0;
let matias = ""
while (i < 5) {
    matias = matias + "*";
    console.log(matias);
    i++;
}

console.log("------------------------------------------------------");

function fila(k) {
    let j = 0;
    let rocio = "";
    while (j < k) {
        rocio = rocio + "*";
        j++;
    }
    console.log(rocio);
}

fila(10);

function pirami (o) {
    let n=5;
    while (n > 0) {
        fila(n);
        n--;
    }
}

pirami(10); 
console.log("------------------------------------------------------");

//Crea un script que imprima una pirámide de "*" dado el número de la base/altura piramide(5)

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
console.log("------------------------------------------------------");

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
console.log("------------------------------------------------------");

for (i=1; i<=5; i++){
    for (j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
}