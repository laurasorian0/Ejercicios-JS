// Contador de repeticiones: Crea una función que nos devuelva el número de veces 
// que se repite cada una de las palabras que lo conforma. 
// Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
const lista2 = ["Laura", "Angel", "Angel", "Antonio", "Angel", "Antonio"

]
const frecuencia = {};
function repeatCounter(array) {
  for (const palabra of array) {
    if (frecuencia[palabra]) {
      frecuencia[palabra] += 1;
    } else {
      frecuencia[palabra] = 1;
    }
  }
  return frecuencia;
}

console.log(repeatCounter(counterWords));
console.log(repeatCounter(lista2));