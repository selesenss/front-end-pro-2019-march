console.log('Lection_26');


/*

- Scoping
- Arrow Functions
- Extended Parameter Handling // rest, spread
- Template Literals // tag templates

- Object Properties
- Destructuring

- Classes
- Generators
- Promises

*/

// let, const

// console.log(x)
// var x = 10;
// let y = 10;
// const z = 600;

// function f() {
//     var x = 20;
//     let y;
    
//     console.log(x, z);
    

//     return x;
// }

// f();

// var x;
// if(true) { // LE = {x: 10}
//     let x = 10;
//     const y = 700; 
// }

// for(var i = 0; i <= 7; i++){
//     console.log(i)
// }

// for(i = 5; i <= 12; i++){
//     console.log(i)
// }


// console.log(y);

// ----------------------


// function f(){
// }
// () => {}

// 1 - callback

// [1, 2, 3]
//     .forEach(function(item){
//         console.log(item)
//     });

// [1, 2, 3]
    // .forEach(item => console.log(item));


// let res = [1, 2, 3]
//     .reduce(function(prev, curr){
//         return prev + curr;
//     });


// console.log(res)

// // () => jasbdjkasnjdkl
// res = [1, 2, 3]
//     .reduce((prev, curr) => { return prev + curr });
// console.log(res)



// -------------------


// let arr = [21, 71, 8, 74, 8, 3, 4, 12];

// let res = arr
//             .map(item => item*item)
//             .filter(item => item > 100)
//             .reduce((prev, item) => item + prev, 0);

// console.log(res);


// -------------------------------


// let f = (a, b) => a - b;

// let f1 = function(){
//     console.log(this);
// }


// const obj = {
//     x: 10,
//     y: 20,
//     f: (a, b) => {
//         // debugger;
//         return a - b;
//     },
//     f1: function(){
//         // debugger;
//         console.log(this);
//     }
// }

// -------------------


// function f(a = 0, b = 20) {
//     // if (b === undefined) {
//     //     b = 20;
//     // }
//     console.log(a, b);
// }

// f(null, 0);

// let sum = (a = null, b = null) => a + b;

// -------------------

// let text = '1sada\nsd00';
// x = 20
// var str = `
//     hello
//     ${text}
//     world
// `;
// console.log(str)
// let string = `2 + 4 = ${text - 4}`

// ----------------------------------
window.onload = function() {
    let list = [
        'Vasya',
        'Petya',
        'Vasya',
        'Petya',
        'Vasya',
        'Petya',
        'Ignat'
    ];

    let str = `<hr />${genList(list)}<hr />`;
    
    document.body.innerHTML = str;
}

function genList(list){
    return `<ul>
                ${list.map(item => getElem(item)).join('')}
            </ul>`
}

function getElem(elem){
    return `<li>${elem}</li>`
}







// ------------------------------------

let x = 20;
let str = 'str';

let example = 'hello-world'

let obj = { 
    x, 
    str,
    sum() {
        console.log(this);
    },
    [example]: 'TOTO'
 }

 console.log(obj)


// ------------------------------------


// let [a, b, c] = [6, , 3, 4];
// let { d, e = '', k, inner: {q, f = 1000}, list: [u, , i] } = {
//     list: [
//         1, 2, 3
//     ],
//     d: 'str',
//     e: false,
//     inner: {
//         q: 40
//     }
// } 

// console.log(a, b, c);
// console.log(d, e, k, q, f, u, i);



// ------------------------------------

// var arr = [2, 8, 4, 9, 5, 7];

// // let buffer = arr[0];
// // arr[0] = arr[arr.length - 1];
// // arr[arr.length - 1] = buffer;
// let last = arr.length-1;

// [arr[0], arr[last]] = [arr[last], arr[0]]

// console.log(arr);


 // ---------------------------------

// class World {

//     life(){
//         console.log(this);
//     }
// }


// class Human extends World {
//     constructor(name, age) {
//         super();

//         this.name = name;
//         this.age = age;

//         super.life()

//         // this.foo = function(a, b) {
//         //     return a + b + age; 
//         // }
//     }

//     run() {
//         console.log(this); 
//     }

//     eat() {

//     }

//     get getAge(){
//         return this.age;
//     }
// }



//  var p1 = new Human('Petya', 20);

//  console.log(p1);