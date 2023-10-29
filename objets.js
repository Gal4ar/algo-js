let student = {
    name: 'Nicolas',
    favoriteFood: 'Salad',
    city: 'Paris',
}
console.log(student.favoriteFood)


let student = {
    name: 'Nicolas',
    favoriteFood: 'Salad',
    city: 'Paris',
}
let values = Object.values(student)
let count = values.reduce((acc, values) => acc + values.length, 0)
console.log(count)