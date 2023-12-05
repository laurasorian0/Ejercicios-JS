// Calcular una suma puede ser tan simple como iterar sobre un array y 
// sumar cada uno de los elementos. 
// Implementa la función denominada sumAll que toma un array de números como argumento 
// y devuelve la suma de todos los números de la matriz. 
// Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
const otherNumbers = [2, 8]

TOTAL_SUM = 0
function sumAll(numbers) {
  TOTAL_SUM = 0
  for (const number of numbers) {
    TOTAL_SUM += number;
  }
  console.log(TOTAL_SUM)
}

sumAll(numbers)
sumAll(otherNumbers)