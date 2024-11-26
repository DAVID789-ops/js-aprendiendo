'use strict'

let n1 = parseInt(prompt("introduce un numero:", 0));
let n2 = parseInt(prompt("introduce otro numero: ",0));

// Identificar el rango
let menor = Math.min(n1, n2);
let mayor = Math.max(n1, n2);

for(let i = menor + 1; i < mayor; i++){
    alert("los numero en medio son: "+ i);

}