// Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
// Crea una función calcularPromedio(notas) que reciba un array de notas dado por el
//  usuario (separadas por comas) y retorne el promedio (redondeado a 2 decimales).

const prompt = require("prompt-sync")()

let notas = prompt("Ingresa las notas sepradas por comas: ").split(",")

function producto(cantidad_notas){
    let suma = 0;
    let promedio 
    for(i = 0; i < cantidad_notas.length; i++){
        suma += Number(cantidad_notas[i])

    }
    promedio = suma / cantidad_notas.length;
    return promedio.toFixed(2)

}

console.log(producto(notas));
