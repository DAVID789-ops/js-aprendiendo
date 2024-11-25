'use strict'
// operadores relaciones

/*
    == igual
    === igual y de tipo
    != diferente
    !== diferente y de tipo
    > mayor que
    < menor que
    >= mayor o igual
    <= menor o igual


var edad = 25;
var edad2 = 25;

if(edad > edad2){
    console.log("mayor");}
if(edad == edad2){
    console.log("iguales");
}
else{
    console.log("menor");
}*/

var year = 20;
var year2 = 202;
//negacion
if(year != 2022){
    console.log("no es 2021");
}

//and
if(year == 2021 && year2 == 2022){
    console.log("es 2021 y 2022");
}

//or
if(year == 2021 || year2 == 2022){
    console.log("es 2021 o 2022");
}else{
    console.log("hoala");
}
