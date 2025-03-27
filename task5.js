// Ejercicio 5: Filtrar Usuarios por Edad
// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función 
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la cual
//  será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas
//  de la lsita cumplen con tener más de 18.


const prompt=require("prompt-sync")();
const usuarios = [
    { nombre: "Lizeth", edad: 15  },
    { nombre: "Andres", edad: 18 },
    {nombre: "Michaell", edad: 30},
    {nombre:"Laura", edad: 20}
   ];
function filtar_edad(edad_minima){
    for (i=0 ; i<usuarios.length; i++){
        let posicion=usuarios[i];
        let valor_edad=posicion.edad;
        if (edad_minima<valor_edad){
            lista=[posicion.nombre,posicion.edad]
            return lista
        }
    let x=usuarios.length-1
    if (x==i){
        return null
    }
    
    }
}
let edad=prompt("Ingresa la edad: ")
console.log(filtrar_edad(edad))

