// Ejercicio 7: Simulador de Cajero Automático
// -App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes".
const prompt = require("prompt-sync")();

function retirarDinero(saldo, monto){
    const saldoActual = saldo;
    const montoRetirar = monto;
    if (saldoActual <= 0 || saldoActual < montoRetirar){
        console.log("Fondos insuficientes");
    }else{
        nuevoSaldo = saldoActual - montoRetirar
        console.log(`Su saldo actual es de: ${nuevoSaldo}`);   
    }    
}

let saldoActual = parseFloat(prompt("Ingrese su saldo actual: "));
let montoRetirar = parseFloat(prompt("Ingrese monto a retirar: "));
retirarDinero(saldoActual,montoRetirar);


