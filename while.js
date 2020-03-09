/* let numero = 0;
let quiereContinuar = true;

while (quiereContinuar) {
    quiereContinuar = confirm(`El numero actual es: ${numero}`);
    numero++;
}

console.log("Terminó")


while (quiereContinuar && numero <= 5) {
    quiereContinuar = confirm(`El numero actual es: ${numero}`);
    numero++;
}

console.log("Terminó") */


let playlist = "";
let canciones = "";

while (canciones !== "Salir") {
    canciones = prompt("Ingrese una canción \n" + playlist);
    playlist += canciones + "\n";
}

console.log(playlist)