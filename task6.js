// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por espacios).


function contarPalabras(texto){
    const conta =  texto.length;
    console.log(conta);
     
}
let mensaje = "hola como estan todos, yo estoy muy bien gracias a dios".split(" ");
contarPalabras(mensaje);