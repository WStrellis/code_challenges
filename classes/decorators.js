class Animal {
    constructor(species) {
        this.species = species
    }

    showSpecies() {
        console.log(`Species: ${species}`)
    }
}

class Dog extends Animal {
    constructor(species, breed, age) {
        super(species)
        this.species = species
        this.breed = breed
        this.age = age
    }

    woof() {
        console.log('woof')
    }
}

const willie = new Dog('canine', 'rottweiler', 4)

willie.woof()
