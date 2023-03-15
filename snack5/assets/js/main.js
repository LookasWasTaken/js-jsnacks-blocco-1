/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
 */

// For Loop

const arrayVuoto = [];

let numeri;

for (let i = 0; i < 6; i++) {
  numeri = Number(prompt("Inserisci un Numero"));
  if (numeri % 2 != 0) {
    arrayVuoto.push(numeri);
  }
}
console.log(arrayVuoto)


// While Loop

let j = 0
while (j < 6) {
  numeri = Number(prompt("Inserisci un Numero"));
  if (numeri % 2 != 0) {
    arrayVuoto.push(numeri);
  }
  j++
}

console.log(arrayVuoto);