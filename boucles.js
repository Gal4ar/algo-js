for(let i = 0; i < 10; i++) {
    console.log(i)
}


let a = 4
for(let i = 0; i < a; i++) {
    console.log("oklm")
}


let i = 0
while(i < 10) {
    console.log(i)
    i++
}


let a = 3
while(a < 9) {
    a++
    switch(a) {
        case 8:
            break
        case 7:
            continue
    }
    console.log(a)
}
console.log("J'ai casse la boucle au bout de " + a + " tours.")