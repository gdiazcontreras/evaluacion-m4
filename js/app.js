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