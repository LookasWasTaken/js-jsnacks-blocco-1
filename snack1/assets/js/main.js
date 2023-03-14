let firstNumber = prompt("Inserire un primo Numero")
let secondNumber = prompt("Inserire un secondo numero")

console.log(firstNumber, "Primo numero", secondNumber, "Secondo numero")

if (firstNumber > secondNumber) {
    console.log(firstNumber, "Vince il primo numero")
} else if (secondNumber > firstNumber) {
    console.log(secondNumber, "Vince il secondo numero")
} else {
    console.log("Stesso Numero")
}
