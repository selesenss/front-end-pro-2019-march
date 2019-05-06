function Animal(name, age) {
    this.age = age;
    // this._name = name;

    var counter = 0;

    this.getName = function () {
        counter++;
        return name;
    }

    this.getCounter = function () {
        return counter;
    }

    this.setCounter = function (value) {
        counter = value;
    }
}

Animal.prototype.sleep = function () {}


var p = new Animal('Petya', 23);
var d = new Animal('Danya', 28);

// console.log(p)



// -------------------------


function Parent(inherit, name, age) {
    if (inherit) return;
    this.foo = 200;
}

function Child(name) {
    this.name = name;
}

// Child.prototype = new Parent(true);
Child.prototype = Object.create(Parent.prototype);

Parent.prototype.eat = function () {};
Child.prototype.sleep = function () {};

var p = new Child('Kusha');

console.log(p)

var parpar = new Parent(false, 'Super name', 28)