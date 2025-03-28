// Ejercicio 5: Filtrar Usuarios por Edad
// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la cual
//  será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas
//  de la lsita cumplen con tener más de 18.

const prompt = require("prompt-sync")();

function filtrarUsuarios(usuarios, edadMinima) {
    let usuariosFiltrados = [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].edad >= edadMinima) {
            usuariosFiltrados.push(usuarios[i]);
        }
    }
    return usuariosFiltrados;
}


const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "María", edad: 20 },
    { nombre: "Sofía", edad: 15 }
];


let edadMinima = parseInt(prompt("Ingrese la edad mínima: "));


let usuariosFiltrados = filtrarUsuarios(usuarios, edadMinima);

if (usuariosFiltrados.length > 0) {
    console.log("Usuarios que cumplen con la edad mínima:", usuariosFiltrados);
} else {
    console.log("No hay usuarios que cumplan con la edad mínima.");
}

