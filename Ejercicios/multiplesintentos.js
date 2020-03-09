//Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, 
//cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos 
//erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje 
//de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

const usuario = "angie";
const contrasena = "1234";
let intentos = 1;

let ingreseUsuario = prompt("Ingrese su usuario");
let ingreseContrasena = prompt("Ingrese su contraseña");

while (ingreseUsuario !== usuario && ingreseContrasena !== contrasena && intentos <= 3 ) {
    intentos++;
    ingreseUsuario = prompt("Ingrese su usuario");
    ingreseContrasena = prompt("Ingrese su contraseña");
    alert(`Error`)
} 

if (ingreseUsuario === usuario && ingreseContrasena === contrasena ) {
    alert(`Bienvenido`);
} else {
    alert(`Error`);
}


