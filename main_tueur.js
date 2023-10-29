// Voici mon code pour l'exercice 2 : Le Tueur en Série.
// Ecrit en anglais, comme JS est en anglais, je trouve ça plus agréable de tout faire dans la même langue.
// Aucun accent dans les console.log car ça ne fonctionne pas et je ne sais pas comment régler le problème.

// Petit problème avec le code: les personnages meurent quand ils esquivent...



// Création des différentes classes nécessaires.

class Killer {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack(survivor) {
        const random = Math.random();

        if (random < 0.3) {
            console.log(`${this.name} a attaque ${survivor.name} et l'a tue.`);
        } else if (random < 0.8) {
            console.log(`${survivor.name} a esquive l'attaque de ${this.name} et a inflige 10 points de degats.`);
            this.health -= 10;
        } else {
            console.log(`${survivor.name} a reussi a infliger 15 points de degats a ${this.name}, mais est mort en le faisant.`);
            this.health -= 15;
        }
    }
}

class Survivor {
    constructor(name, characteristic) {
        this.name = name;
        this.characteristic = characteristic;
        this.isAlive = true;
    }
}


// Création des 4 variables nécessaires.

const killer = new Killer('Jason', 100)
// Characteristics, inspiré par la façon de faire d'Ismael.
const characteristics = [
    { name: "nerd", deathProbability: 0.3, damageProbability: 0.5, deathByDamageProbability: 0.2 },
    { name: "sportif", deathProbability: 0.2, damageProbability: 0.8, deathByDamageProbability: 0.5 },
    { name: "blonde", deathProbability: 0.8, damageProbability: 0.3, deathByDamageProbability: 0.1 },
    { name: "grand", deathProbability: 0.4, damageProbability: 0.5, deathByDamageProbability: 0.4 },
    { name: "petit", deathProbability: 0.6, damageProbability: 0.6, deathByDamageProbability: 0.7 }
]
const names = ['Ismael', 'Pierre', 'Margaux', 'Aldric', 'Matteo']
const survivors = []


// Déroulé des évênements.

for (let i = 0; i < 5; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const characteristic = characteristics[Math.floor(Math.random() * characteristics.length)];
    survivors.push(new Survivor(name, characteristic));
}

while (killer.health > 0 && survivors.length > 0) {
    const randomSurvivorIndex = Math.floor(Math.random() * survivors.length);
    const randomSurvivor = survivors[randomSurvivorIndex];

    killer.attack(randomSurvivor);

    if (randomSurvivor.characteristic.deathProbability > Math.random()) {
        console.log(`${randomSurvivor.name} est mort.`);
        
        survivors.splice(randomSurvivorIndex, 1);
    }
}


// Résultats.

if (killer.health <= 0) {
    console.log('Jason est mort. Les survivants ont gagne!');
} else {
    console.log('Tous les survivants ont ete tues. RIP a tous.');
}