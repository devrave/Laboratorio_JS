// Ejercicio 3: Buscar Producto en Inventario
// - Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El inventario debería estar PREDEFINIDO
// ejemplo:
// const inventario = [
// { nombre: "Camisa", precio: 20 },
// { nombre: "Zapatos", precio: 50 }

// const inventario = [
//     { nombre: "Camisa", precio: 20 },
//     { nombre: "Zapatos", precio: 50 }
// ];

// for (let i = 0; i < inventario.length; i++) {
//     let item = inventario[i]; 
//     for (let key in item) {   
//         console.log(`${key}: ${item[key]}`);
//     }
//     console.log("-----------"); 
// }


// grupal

const prompt=require("prompt-sync")();
const inventario = [
    { nombre: "Camisa", precio: 20  },
    { nombre: "Zapatos", precio: 50 },
    {nombre: "chaquetas", precio: 10}
   ];
function consulta(nombre){
    for (i=0 ; i<inventario.length; i++){
        let posicion=inventario[i];
        let nombr=posicion.nombre;
        if (nombr==nombre){
            return nombr
        }
    let x=inventario.length-1
    if (x==i){
        return null
    }
    
    }
}
let dato=prompt("Ingresa el nombre del producto: ")
console.log(consulta(dato))

