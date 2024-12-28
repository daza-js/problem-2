const readline = require("readline"); // Importar el módulo readline

const rl = readline.createInterface({
  input: process.stdin, // Entrada desde la consola
  output: process.stdout, // Salida en la consola
});

// Implementamos una función llamada calcularFactorial(num) que usa
// recursión para calcular el factorial:
function calcularFactorial(num) {
  if (num === 0 || num === 1) {
    return 1; // Casos base: el factorial de 0 y 1 es 1
  }
  return num * calcularFactorial(num - 1); // Recursión para calcular el factorial
}

rl.question("Ingrese un número entero positivo: ", (input) => {
  const numero = parseInt(input, 10); // Convertir la entrada a un número entero

  // Validar y procesar la entrada
  // usamos la función isNaN() para verificar si la entrada es un número válido
  if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingrese un número entero positivo.");
    rl.close();
    return;
  }

  // Calcular el factorial
  const resultado = calcularFactorial(numero);

  // Mostrar el resultado
  console.log(`El factorial de ${numero} es: ${resultado}`);
  rl.close(); // Cerrar la interfaz después de mostrar el resultado
});
