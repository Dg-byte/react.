const Animal = {
    name: "",
    sound: 0,
    say: function(){
        console.log(this.name + " шепелявит ")
    },
    constrct: function(name){
        this.name = name;      
    },
    sing: function(){
        console.log(this.name + " поёт ")
    },
    constrct: function(name){
        this.name = name;       
    }
}

const duckDog = Object.create(Animal)
duckDog.constrct("Дональд Дак")

const Chipmunk = Object.create(Animal)
Chipmunk.constrct("Элвин", "Пока!")




duckDog.say()
Chipmunk.sing()
