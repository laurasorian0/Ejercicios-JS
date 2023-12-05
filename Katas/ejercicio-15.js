// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array 
// que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const lista2 = ["Hola que tal", "como estás", "Hola, muy bien", "Yo también"]
solucion = []

function frasesConPalabra(array, palabra) {
  solucion = []
  for (const frase of array) {
    if (frase.includes(palabra)) {
      solucion.push(frase)
    }

  }

}
frasesConPalabra(products, "Camiseta")
frasesConPalabra(lista2, "Hola")
console.log(solucion)