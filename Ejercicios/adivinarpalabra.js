//Crear un programa que elija una palabra al azar de un conjunto de palabras posibles, y permita al usuario 
//intentar adivinarla. Por cada intento sucesivo, el programa debe ir mostrando como pista la palabra de forma 
//parcial, empezando con la primera letra y agregando una letra a la vez. El programa debe terminar cuando 
//se adivina la palabra o se muestran todas las letras de la misma. Por ejemplo, si la palabra a adivinar 
//es LOVELACE, mostrar como sugerencia primero L, luego LO, luego LOV, luego LOVE, luego LOVEL, etc.

const palabras = ["cocina", "heladera", "televisor", "hamaca", "telefono"];
const palabraAlAzar = palabras[Math.floor(Math.random() * (palabras.length))];
const arrayPalabra = palabraAlAzar.split("");
let intentos = 0;
let adivinar = "";
let pista = "";

while(adivinar !== palabraAlAzar) {
    intentos++;
    adivinar = prompt('Intente adivinar la palabra');
    pista += arrayPalabra[intentos - 1];
    alert(`${pista}`)
}

alert(`Felicidades`)