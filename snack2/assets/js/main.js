const firstWord = prompt("Inserire una prima Parola")
const secondWord = prompt("Inserire una seconda Parola")

console.log(firstWord, "Prima parola", secondWord, "Seconda parola")
console.log(firstWord.length, "Lunghezza Prima Parola", secondWord.length, "Lunghezza Seconda Parola")

if (firstWord.length > secondWord.length) {
    console.log(`La prima parola ${firstWord} è più lunga della seconda ${secondWord}`)
} else if (secondWord.length > firstWord.length) {
    console.log(`La seconda parola ${secondWord} è più lunga della prima ${firstWord}`)
} else {
    console.log(`La prima parola ${secondWord} e la seconda parola ${firstWord} hanno la stessa lunghezza`)
}