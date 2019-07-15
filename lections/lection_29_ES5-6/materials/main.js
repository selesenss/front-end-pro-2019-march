console.log('Lection_29');


/*
- Classes
- Generators
- Promises
*/

// прототипное ООП
// function Animal(name, age){
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.run = function(){}
// Animal.example = function(){}

// function Crocodile(type){
//     this.type = type;
// }

// Crocodile.prototype = Object.create(Animal.prototype);

// let animal = new Crocodile('Sharik', 29);
// animal.run();

// ----------------------------------------------

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.type = 'crocodile';
        this.fofo = [];
    }

    run(){
        console.log(this);
    }
    eat(){}

    static example(){
        console.dir(this);
    }
}

class Rabbit extends Animal {
    constructor(name, age, isHaveTail){
        super(name, age);

        this.type = 'rabbit';
        this.isHaveTail = isHaveTail;
        delete this.fofo;
    }

    jump(){}
    run(){}

    get speed(){
        return 100;
    }

    set speed(value){
        console.log('val:', value)
    }
}
let animal = new Rabbit('Sharik', 29, true);
console.log(animal);