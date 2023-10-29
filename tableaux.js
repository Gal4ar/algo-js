let fruits = ['pomme', 'poire', 'banane']
fruits.forEach(function(fruit) {
    console.log(fruit)
})


fruits.forEach(function (fruit) {
    console.log(fruit)
})
// fonction flechee
fruits.forEach((fruit) => {
    console.log(fruit)
})


let names = []
names.push('Vincent', 'Paul', 'Arthur');
names.forEach(name => {
    name += " va a la peche"
    console.log(name);
})