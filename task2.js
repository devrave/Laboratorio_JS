// Ejercicio 2: Validar Contraseña
// - Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres.
// - Incluye un número.
// - Incluye una mayúscula.


const prompt = require("prompt-sync")()

function validarTexto(pass) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(pass);}
   
let pass = (prompt("Ingresa la contraseña: "));     

    while (true) {
        if(validarTexto(pass)) // es lo mismo que dejarlo if(validarTexto(pass) == true)
        console.log("Contraseña válida:", pass);
        break; 
    }
    pass = prompt("La contraseña debe tener al menos 8 caracteres, incluir un número y una mayúscula: ");    

console.log(validarTexto(pass));



// Respuesta grupal



let password = prompt("Ingrese la contraseña: ")

function validarContraseña(contraseña){
    
    if(contraseña.length >=8 ){
        if(/[A-Z]/.test(contraseña) && /[0-9]/.test(contraseña)){
            return true
        }
        else{
            return false
        }
    }
    else{
     console.log("Hacen falta caracteres")
     return false
    };
}
console.log(validarContraseña(password));