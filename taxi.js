// Voici mon code pour l'exercice 1 : Le Taxi.
// Ecrit en anglais, comme JS est en anglais, je trouve ça plus agréable de tout faire dans la même langue.
// Aucun accent dans les console.log car ça ne fonctionne pas et je ne sais pas comment régler le problème.



// Création des différentes classes nécessaires.

class Characters {
    constructor(name, mental) {
        this.name = name;
        this.mental = mental;
    }
}

class Travel {
    constructor(radio, redlights, changes) {
        this.radio = radio;
        this.redlights = redlights;
        this.changes = changes;
    }
}


// Création des 3 variables nécessaires.

const playlist = ["Anissa - Wejdene", "Running in The 90s - Initial D", "Assassin des Templiers - Norman", "Je veux chanter - Christophe Michel", "Les sardines - Patrick Sebastien"]
const John = new Characters('John', 10)
const Roadtrip = new Travel(playlist, 30, 0)


// Déroulé des évênements (à noter que si on veut changer le nom du perso, il faut tout changer à la main).

for (let i = 0; i < Roadtrip.redlights; i++) {
    // A la ligne suivante j'ai utilisé ChatGPT car je ne savais pas comment tirer au sort une musique.
    const musicRandom = Roadtrip.radio[Math.floor(Math.random() * Roadtrip.radio.length)];
    console.log(`Musique : ${musicRandom} - Feux restants : ${Roadtrip.redlights - i}`);

    if (musicRandom === 'Anissa - Wejdene') {
        John.mental -= 1;
        Roadtrip.changes += 1;
        if (John.mental <= 0) {
            console.log('John devient fou et... EXPLOSION!');
            break;
        }
        console.log(`John perd patiente et change de taxi. Il est a ${Roadtrip.changes} changement de taxi.`);
    }
}

// Résultats (autres qu'EXPLOSION), avec différents messages selon le niveau de mental.
if (John.mental > 0) {
    if (John.mental >= 6){
        console.log(`John est bien arrive chez lui apres ${Roadtrip.changes} changements de taxi. Un peu irrite, mais il s'endort sur ses deux oreilles.`);
    }
    if (John.mental >= 3 && John.mental < 6){
        console.log(`John est bien arrive chez lui apres ${Roadtrip.changes} changements de taxi. Sur les nerfs, il s'endort avec une migraine.`);
    }
    if (John.mental >= 1 && John.mental < 3){
        console.log(`John est bien arrive chez lui apres ${Roadtrip.changes} changements de taxi. A pas grand chose de peter un cable, il s'endort furieux.`);
    }
}
