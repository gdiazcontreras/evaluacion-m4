// --- Proyecto Módulo 3 ---
// Aplicación de consola en JavaScript

// 1. Mensajes básicos
console.log("Bienvenido/a a la aplicación de consola 🚀");
alert("¡Hola! Vamos a practicar JavaScript");

// 2. Pedir datos al usuario
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// 3. Funciones matemáticas
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

// 4. Condicionales
let operacion = prompt("¿Qué operación quieres realizar? (suma, resta, multiplicar, dividir)");

switch (operacion) {
  case "suma":
    console.log("Resultado:", sumar(num1, num2));
    break;
  case "resta":
    console.log("Resultado:", restar(num1, num2));
    break;
  case "multiplicar":
    console.log("Resultado:", multiplicar(num1, num2));
    break;
  case "dividir":
    console.log("Resultado:", dividir(num1, num2));
    break;
  default:
    console.log("Operación no válida");
}