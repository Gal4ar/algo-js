let a = 4
let b = 4
let c = 3
if (a == b) {
    console.log("C'est egal!")
} 
if (c < b && a+c != 3) {
    console.log("Ok")
} else {
    console.log("Rate!")
}


let a = 4
let b = 4
let c = 3
switch(a) {
    case b:
        console.log("Egal a b")
        break
    case c:
        console.log("Egal a c")
        break
    default:
        console.log("Egal a rien")
}