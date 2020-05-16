class Animal {
    constructor(name = "",color = "" , say = "") {
        this.name = name;
        this.color = color;
        this.say = say;
    }

    info() {
        console.log(this.name + " "+ this.color + " цвета  и говорит " + this.say);
    }
}

class Dog extends Animal {
    constructor(name, color,say, kakoy = "") {
        super(name, color , say)
        this.kakoy = kakoy;
    }

    getDog() {
        console.log("Он " + this.kakoy);
    }
}

const sobaka = new Dog("Собака", "рыжего", "гав - гав!", "крутой")

sobaka.info()
sobaka.getDog()

class Duck extends Animal {
    constructor(name,  color, say, age = "") {
        super(name, color,say)
        this.age = age;
    }

    getDuck() {
        console.log("Ей " + this.age + " лет");
    }
}

const duck = new Duck("Утка", "белого", "Кря-Кря!", "5")

duck.info()
duck.getDuck()

class Chipmunk extends Animal {
    constructor(name,color,say, action = "") {
        super(name,color, say)
        this.action = action;
    }

    getChipmunk() {
        console.log("Он " + this.action)
    }
}

const chipmunk = new Chipmunk("Бурундук", "серого" ,"он не говорит, а пищит " , "наелся и спит")

chipmunk.info()
chipmunk.getChipmunk()
