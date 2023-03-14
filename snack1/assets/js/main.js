let firstNumber = prompt("Inserire un primo Numero")
let secondNumber = prompt("Inserire un secondo numero")

console.log(firstNumber, "Primo numero", secondNumber, "Secondo numero")

if (firstNumber > secondNumber) {
    console.log(`Il primo numero ${firstNumber} è maggiore del secondo ${secondNumber}`)
} else if (secondNumber > firstNumber) {
    console.log(`Il secondo numero ${secondNumber} è maggiore del primo ${firstNumber}`)
} else {
    console.log("Stesso Numero")
}