//Crear un programa para llevar la cuenta del puntaje de un partido de tenis. Debe pedir inicialmente por los 
//nombres de las jugadoras, y luego ir pidiendo el nombre de la ganadora de cada set, y mostrando el puntaje 
//actualizado. Si alguna de las dos llega a los 3 puntos, el programa debe terminar y anunciar la ganadora

const jugadora1 = prompt('Ingrese el nombre de la primer jugadora');
const jugadora2 = prompt('Ingrese el nombre de la segunda jugadora');
let puntaje1 = 0;
let puntaje2 = 0;
let ganadora = "";

while(puntaje1 < 3 && puntaje2 < 3) {
    ganadora = prompt('Ingrese el nombre de la ganadora del set');

    if(ganadora === jugadora1) {
        puntaje1++
        alert(`La jugadora ${jugadora1} tiene ${puntaje1} puntos.
        La jugadora ${jugadora2} tiene ${puntaje2} puntos.`)
    } else if(ganadora === jugadora2) {
        puntaje2++
        alert(`La jugadora ${jugadora1} tiene ${puntaje1} puntos.
        La jugadora ${jugadora2} tiene ${puntaje2} puntos.`)
    }
}

if(puntaje1 === 3) {
    alert(`La ganadora es ${jugadora1}`)
} else {
    alert(`La ganadora es ${jugadora2}`)
}