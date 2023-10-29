let a = 3
let b = 4
function addition(number1, number2) {
    console.log(number1 + number2)
}
addition(a, b)


let a = 3
let b = 4
let somme = addition(a, b)
function addition(number1, number2) {
    return number1 + number2
}
console.log(somme)


let a = "Jean"
let b = "Paul"
let result = checkName(a, b)
function checkName(name1, name2) {
    if (a == b) {
        return "Identiques"
    } else {
        return "Differents"
    }
}
console.log(result)