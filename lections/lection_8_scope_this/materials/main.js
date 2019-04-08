console.log('Lection_8');


var data = {
    name: "Petya",
    age: 28,
    action: getNameAndAge
}

var info = {
    name: 'Vasya',
    age: 20,
    action: getNameAndAge
}

// console.log(
//     data.action(),
//     info.action()
// );


function getNameAndAge() {
    // console.log(this);
    // var x = 20;
    // debugger;
    return this.name + ' ' + this.age;
}


// -----------------------

// wrong way
// console.log(this); // window



// -----------------------------

function fooBar() {
    console.log(this)
    return 10 + 'Hello string';
}


// window.fooBar();
// fooBar();

// -----------------------------

var struct = {
    x: 10,
    y: 60,
    str: 'hello',
    flag: false,
    arr: [1, 7, 8,],
    info: {
        x: 20,
        z: 20
    },
    iterateAll: iterateAll
}

function iterateAll(){
    console.log(this, arguments.callee === this.iterateAll, arguments.callee.name);
    for(var key in this){
        // if(key === 'iterateAll') continue;
        if(this[key] === iterateAll) continue;

        console.log(key) // this[key]

    }
}

// -------------------------------
var FOFO = struct.iterateAll;

// FOFO();
struct.iterateAll();

