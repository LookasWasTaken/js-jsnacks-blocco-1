// For Loop

let somma = 0;
for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt(`Inserisci il numero ${i}:`));
  somma += numero;
  console.log(`Il numero scritto è ${numero}`);
  console.log(`La somma attuale è ${somma}`);
  if (isNaN(numero)) {
    alert("Inserisci solo numeri!");
    i--;
  }
}
console.log(`La somma dei numeri inseriti è ${somma}.`);

// While Loop

let j = 1;
while (j <= 10) {
  let numero = Number(prompt(`Inserisci il numero ${j}:`));
  somma += numero;
  console.log(`Il numero scritto è ${numero}`);
  console.log(`La somma attuale è ${somma}`);
  if (isNaN(numero)) {
    alert("Inserisci solo numeri!");
    j--;
  }
  j++;
}
