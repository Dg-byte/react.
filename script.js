const Animal = {
    name: "",
    sound: 0,
    says: function(){
        console.log(this.name + " говорит " + this.sound)
    },
    constrct: function(name, sound){
        this.name = name;
        this.sound = sound;
    },
    say: function(){
        console.log(this.name + " " + this.sound)
    },
    constrct: function(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

const duck = Object.create(Animal)
duck.constrct("Утка", "Кря-Кря!")

const dog = Object.create(Animal)
dog.constrct("Собака", "Гав-Гав!")

const chipmunk = Object.create(Animal)
chipmunk.constrct("Бурундук", "пищит...")


duck.says()
dog.says()
chipmunk.say()
