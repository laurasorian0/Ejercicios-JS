// Calcular promedio de strings: Crea una función que reciba por parámetro un array 
// y cuando es un valor number lo sume y de lo contrario cuente la longitud del string 
// y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const mixed2 = [1, 1, 1, "no"]

totalSum = 0
function averageWord(array) {
  totalSum = 0
  for (const item of array) {
    if (typeof (item) == "string") {
      totalSum += item.length
    } else if (typeof (item) == "number") {
      totalSum += item
    }
  }
  console.log(`La suma total es ${totalSum}`)
}

averageWord(mixedElements)
averageWord(mixed2)