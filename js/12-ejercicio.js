'use strict'

var contador = 0;
var suma = 0;

do{
    var numero = parseInt(prompt("ingrese un nuemro", 0));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }
    console.log("el contador es: " + contador);
    console.log("la suma es: " + suma);

}while(numero >= 0)

alert("el promedio es: " + (suma/contador));
alert("la suma es: " + suma);


