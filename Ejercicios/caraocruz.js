//Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio 
//y mostrar si se acertó o no. El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, 
//y si en algún momento se erra, reiniciar el contador a 0. También debe llevar una cuenta de la cantidad 
//máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez de CARA o CRUZ, 
//el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, 
//y terminar su ejecución.

let eleccion = "cara";
let resultadoGenerado = 0;
let rondasAcertadas = 0;
let resultadoRondas = 0;


while (eleccion !== "salir" ) {
    eleccion = prompt(`Ingrese una opción: cara o cruz.`);
    resultadoGenerado = Math.round(Math.random() * 2) + 1;

    if(resultadoGenerado === 1) {
    resultadoGenerado = "cara";
    } else if (resultadoGenerado === 2) {
    resultadoGenerado = "cruz";

    if(eleccion === resultadoGenerado) {
    rondasAcertadas++;
    resultadoRondas += rondasAcertadas;
    alert(`Computadora eligio ${resultadoGenerado}. Lleva ${resultadoRondas} rondas ganadas`)
    } else if(eleccion === "salir") {
    alert(`Hatsa luego!`)
    } else if (eleccion !== resultadoGenerado) {
    rondasAcertadas = 0;
    }
}

}



