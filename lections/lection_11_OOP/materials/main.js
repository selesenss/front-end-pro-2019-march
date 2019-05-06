console.log('Lection 11');

function Dog(name, age, maxAge) {
    this.name = name;
    // this.age = age;
    this.maxAge = maxAge || 20;

    // getter
    this.getAge = function () {
        return age || null;
    }

    //setter
    this.setAge = function (value) {
        if (!value || value < 0 || value >= this.maxAge) {
            return;
        }
        age = value;
    }
}

Dog.prototype.eat = function () {
    console.log(this.name + ' eat')
}

var dog1 = new Dog('Sharik', 3, 25);
var dog2 = new Dog('Bobik', 2);

console.log(dog1.getAge())
dog1.setAge(10);
console.log(dog1.getAge())

// console.log(dog1._age)

// -------
// dog1.eat();
// dog2.eat();

// console.log(dog1, dog2)

// var info = {
//     x: 10,
//     f: function () {}
// }

// console.log(info);