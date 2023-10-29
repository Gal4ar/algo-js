let users = ["Stephanie", "Gaia", "Etienne", "Michel", "Roberto", "Julie"]

function countCharacter(value) {
    return value.lenght
}

users.forEach(user => {
    if (countCharacter(user) > 5) {
        console.log("C'est un prenom long de plus de 5 lettres.")
    } else {
        console.log("Ce n'est pas du tout un prenom long.")
    }
});