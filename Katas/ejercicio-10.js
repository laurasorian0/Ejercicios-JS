// Calcular un promedio (media) es una tarea extremadamente común. 
// Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
const lista2 = [2, 3, 3, 1, 1]

totalSum = 0
function average(numbers) {
  totalSum = 0
  for (const number of numbers) {
    totalSum += number;
  }
  media = totalSum / numbers.length;
  console.log(`La media de tu lista es ${media}`)

}
average(numbers)
average(lista2)