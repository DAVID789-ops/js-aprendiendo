'use strict'


var edad = 20;
var imprime = "";


switch(edad){
    case 20:
        imprime = "edad es 20";
        break;
    case 21:
        imprime = "edad es 21";
        break;
    default:
        imprime = "edad no es 20 ni 21";
        break;
}

console.log(imprime);