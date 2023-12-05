// Buscar la palabra más larga Completa la función que tomando un array de strings 
// como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud 
// deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const lista2 = ["Laura", "Esperanza", "Macarena", "Eva", "Maria de las Angustias"];

palabra_guardada = ""
function findLongestWord(lista) {
  palabra_guardada = ""
  for (const palabra of lista) {

    if (palabra_guardada.length < palabra.length) {
      palabra_guardada = palabra
      console.log(`La nueva palabra más larga es ${palabra_guardada}`)
    }
  }
}

findLongestWord(avengers)
findLongestWord(lista2)