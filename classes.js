class Guerrier {
    constructor(attack, defense) {
        this.attack = attack;
        this.defense = defense;
    }
    getAttack() {
        console.log(this.attack)
    }
}
let Alexis = new Guerrier(10, 5);
Alexis.getAttack();


class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaque ' + pokemon.name + ' pour ' + damage + ' de degats! Il lui reste ' + pokemon.hp + ' points de vie.')
        } else {
            console.log(this.name + ' a rate son attaque!')
        }
    }
    isLucky() {
        return this.luck > Math.random()
    }
}

let tortank = new Pokemon('Tortank', 10, 11, 100, 0.7)
let dracolosse = new Pokemon('Dracolosse', 14, 8, 100, 0.5)
while (tortank.hp > 0 && dracolosse.hp > 0) {
    dracolosse.attackPokemon(tortank)
    if (tortank.hp <= 0) {
        console.log(tortank.name + ' is dead!')
        break
    }
    tortank.attackPokemon(dracolosse)
    if (dracolosse.hp <= 0) {
        console.log(dracolosse.name + ' is dead!')
        break
    }
}