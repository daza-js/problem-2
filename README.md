# Análisis Detallado de la Aplicación para Calcular el Factorial

Este documento presenta un análisis detallado del proceso de desarrollo de una aplicación basada en Node.js que calcula el factorial de un número entero positivo ingresado por el usuario.

## 1. **Propósito de la Aplicación**
La aplicación permite a los usuarios calcular el factorial de un número entero positivo ingresado a través de la consola. El factorial de un número \( n \) se define como el producto de todos los números enteros desde 1 hasta \( n \), representado matemáticamente como:

\[ n! = n \times (n-1) \times (n-2) \times \dots \times 1 \]

El programa:
1. Solicita al usuario un número entero positivo.
2. Valida la entrada proporcionada.
3. Calcula el factorial usando una función recursiva.
4. Muestra el resultado en la consola.

---

## 2. **Desglose del Problema**
### Requerimientos
- **Entrada**: Un número entero positivo proporcionado por el usuario.
- **Salida**: El factorial del número ingresado.
- **Restricciones**:
  - La entrada debe ser un número entero positivo.
  - Si la entrada no es válida, se debe mostrar un mensaje de error y finalizar el programa.


### Flujo de la Aplicación
1. La aplicación solicita al usuario un número entero positivo.
2. Valida que la entrada sea un número entero y mayor que cero.
3. Calcula el factorial del número utilizando la función `calcularFactorial`.
4. Muestra el resultado o un mensaje de error en caso de entrada inválida.
5. Finaliza la ejecución.

---

## 3. **Pruebas Realizadas**

### Casos de Prueba
1. **Entrada Válida**:
   - Entrada: 5
   - Salida Esperada: `5! = 120`

2. **Entrada Inválida**:
   - Entrada: "abc"
   - Salida Esperada: `Por favor, ingrese un número entero positivo.`

3. **Caso Borde**:
   - Entrada: 0
   - Salida Esperada: `0! = 1`

