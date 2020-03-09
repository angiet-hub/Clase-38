//Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente 
//adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado.
// El programa debe terminar cuando se adivina el número.

const numeroAzar = Math.round(Math.random()*10) + 1;
let intento = Number(prompt('Intente adivinar el numero'));

while(numeroAzar !== intento) {
    intento = Number(prompt('Intente adivinar el numero'));
    if(intento < numeroAzar){
        alert(`Incorrecto, el número ingresado es menor al numero correcto`);
    } else if(intento > numeroAzar) {
        alert(`Incorrecto, el número ingresado es mayor al numero correcto`);
    } else if(intento === numeroAzar) {
        alert(`Felicidades!`)
    }
}