/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

// For Loop

const people = [
  "Luca",
  "Alex",
  "Mattia",
  "Fabio",
  "Paolo",
  "Donato",
  "Giuliano",
];

let user = prompt("Inserire il nome per Villa Boolean");

let invite = false;

for (let i = 0; i < people.length; i++) {
  if (people[i] === user) {
    invite = true;
    break
  }

}

if (invite) {
  alert("Benvenuto alla festa del Grande Gatsby!");
} else {
  alert("Mi dispiace, non sei stato invitato alla festa del Grande Gatsby.");
}

// While Loop

let j = 0;

while (j < people.length) {
  if (people[j] === user) {
    invite = true;
    break;
  }
  j++;
}

if (invite) {
  alert("Benvenuto alla festa del Grande Gatsby!");
} else {
  alert("Mi dispiace, non sei stato invitato alla festa del Grande Gatsby.");
}