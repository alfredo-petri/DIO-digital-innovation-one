class hero {
    constructor (name, age, type, attack, damage, damageType, enemy){
        this.name = name;
        this.age = age;
        this.type = type;
        this.attack = attack;
        this.damage = damage;
        this.damageType = damageType;    
        this.enemy = enemy;
    }

    atacar (){
        console.log (`O Herói ${this.name} de ${this.age} de idade, da classe ${this.type}, atacou usando ${this.attack} e causou ${this.damage} de dano do tipo ${this.damageType} ao inimigo ${this.enemy}`)
    }
}

let ninja = new hero ("Oderfla", 31, "ninja", "Shuriken", 25, "físico", "Goblin")

let warrior = new hero ("August", 25, "guerreiro", "espada", 30, "físico", "Bugbear")

let mage = new hero ("Merlin", 57, "mago", "magia elemental de fogo", 115, "mágico", "Troll")

let pirate = new hero ("Jack", 22, "pirata", "arma de fogo", 40, "físico", "Hydra")

ninja.atacar()
warrior.atacar()
mage.atacar()
pirate.atacar()


