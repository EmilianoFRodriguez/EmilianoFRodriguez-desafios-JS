alert ("Te ayudo a calcular el porcentaje de un numero");


function porcentajes(porcentaje, total, operacion){
    operacion = porcentaje * total;
    return operacion / 100;
}


let porcentaje = parseInt(prompt("Ingrese el porcentaje a calcular"));
let total = parseInt(prompt("Ingrerse el numero al que le calculamos el porcentaje"));
let operacion = porcentaje * total;


let resultado = porcentajes(porcentaje, total, operacion);

alert(`El ${porcentaje}% de ${total} es: ${resultado}`)