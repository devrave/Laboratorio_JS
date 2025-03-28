// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.

const prompt = require("prompt-sync")();

function convertirMoneda(cantidad, precioCambio) {
    return cantidad * precioCambio;
}

console.log("Elige la moneda de destino:");
console.log("1. USD");
console.log("2. EUR");

let opcion = prompt("Ingresa el número de la opción (1 o 2): ").trim();
let monto = parseFloat(prompt("Ingresa el monto en COP: "));
let precioCambio;

switch (opcion) {
    case "1":
        precioCambio = 0.00025; // conversion usd
        console.log(`El monto en USD es: ${convertirMoneda(monto, precioCambio)}`);
        break;
    case "2":
        precioCambio = 0.00023; // conversion eur
        console.log(`El monto en EUR es: ${convertirMoneda(monto, precioCambio)}`);
        break;
    default:
        console.log("Opción no válida. Por favor elige 1 -> USD o 2 -> EUR.");
        break;
}