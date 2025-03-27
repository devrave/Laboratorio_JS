// Ejercicio 1: Calculadora de Propinas

const prompt = require("prompt-sync")()

function calcularPropina(total, porcentaje){
    totalCuenta = total + ((total * porcentaje) / 100);
    return totalCuenta;

}
console.log("GRACIAS POR COMER EN GENERATION RESTAURANT");
let total = Number(prompt("Ingresa el total: "));
let propina = Number(prompt("Ingresa el porcentaje de propina: "));

console.log("El total a pagar es: " + calcularPropina(total,propina))



