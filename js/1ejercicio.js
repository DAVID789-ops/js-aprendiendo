'use strict'

var numero = prompt("ingrese un nuemro");
var nuemro2 = prompt("ingrese un nuemro");

if(numero > nuemro2){
    console.log("este numero es mayor"+ numero);
    console.log("este numero es menor"+ nuemro2);
}
else if(numero == nuemro2){
    console.log("los nuemro son iguales");
}
else if (numero < nuemro2){
    console.log("este numero es menor" +" "+ nuemro2);
    console.log("este numero es mayor" +" "+ numero);
}
else{
    alert("ingrese un nuemro");
}