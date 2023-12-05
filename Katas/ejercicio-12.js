// Valores únicos: Crea una función que reciba por parámetro un array y 
// compruebe si existen elementos duplicados, en caso que existan los elimina para retornar
//  un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const duplicates2 = ["Laura", "Angel", "Angel", "Angel", "Antonio", "Adrián", "Adrián"]

let lista2 = []

function removeDuplicates(array) {
  lista2 = []
  for (const palabra of array) {
    if (lista2.includes(palabra)) {
      lista2.indexOf(palabra) == palabra;
    } else {
      lista2.push(palabra);
    }
  }
}

removeDuplicates(duplicates)

console.log(lista2)

