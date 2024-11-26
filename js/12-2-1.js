var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("introduce un numero lele: ", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if (numero >= 0){
        suma = suma + numero;
        contador++;
    }
        

}while (numero >=0)
    alert("tu promedio es: " + (suma/contador));
    alert("tu suma es:" + suma);