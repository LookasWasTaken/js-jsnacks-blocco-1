const firstWord = prompt("Inserire una prima Parola")
const secondWord = prompt("Inserire una seconda Parola")

console.log(firstWord.length, "Lunghezza Prima Parola", secondWord.length, "Lunghezza Seconda Parola")

if (firstWord === "" || secondWord === "") {
    alert("Devi inserire una parola!")
}

if (firstWord.length > secondWord.length) {
    console.log(secondWord.length, firstWord.length)
    console.log(`La prima parola (${firstWord}) è più lunga della seconda parola (${secondWord})`)
} else if (secondWord.length > firstWord.length) {
    console.log(firstWord.length, secondWord.length)
    console.log(`La seconda parola (${secondWord}) è più lunga della prima parola (${firstWord})`)
} else {
    console.log(firstWord.length, secondWord.length)
    console.log(`La prima parola (${firstWord}) e la seconda parola (${secondWord}) hanno la stessa lunghezza`)
}