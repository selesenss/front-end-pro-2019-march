console.log('Lection 21');


function f(){
    console.log(this);
}


// window.f
// f(); // this -> window

var data = {
    f: f
}

// data.f(); // this -> data

// ------

function Human(age){
    console.log(this);
    this.age = age;
}
class Animal{
    constructor(age){
        console.log(this);
        this.age = age;
    }
}

// new Human(12)
// new Animal(12)


// ----------------------

// call, apply, bind

function action(){
    console.log(this);
}

var info = {
    action,
    some: 100,
    title: 'Hello world'
}

var newContext = {
    foo: 205,
    someValue: 'text'
}

// call
// action();

// action.call(null);
let ctx = 5 < 0 ? newContext : info;
// info.action.call(newContext)
// info.action.call(info);
// info.action.call(ctx);



// ---------------------


function process(a, b){
    console.log(this)

    return 'a=' + a + ' b=' + b;
}

// var res = process(12, -7)
// var res = process.call(ctx,12, -7)


// res = [1, 6, 7, 8, 9, 8, 9, 7].slice(1, 3);
// res2 = 'hello world hey'.slice(1, 3)

// res = [1, 6, 7, 8, 9, 8, 9, 7].reverse();
// res2 = [].reverse.call('hello world hey')

function fooBar(){
    console.log(arguments);

    // var split = arguments.slice(0, arguments.length/2);
    var split = [].slice.call(arguments, 0, arguments.length/2+1);
    split = Array.prototype.slice.call(arguments, 0, arguments.length/2+1);

    console.log(split)



    // apply


}

// fooBar(1, 2, 3, 4, 5);

// console.log(res);
// console.log(res2);

// process.call(ctx, 12, 9);
// process.apply(ctx, [12, 9]);

// -------------------------------

// bind

function example(){
    console.log(this);
}

var newF = example.bind(ctx);

// console.log(example, newF)
// example();
// newF();

// -------------------------

 function sum(a){
     return function(b){
        return a + b + this.c;
     }
 }
 
 var dataPost = {
 }
 var postponedSum = sum(5).bind(dataPost, 3)
 dataPost.c = 200;  



 console.log( postponedSum() );

 dataPost.innerSum = sum(5)
 console.log(dataPost.innerSum(3))


 window.onload = function(){
    var actionBox = {
        height: 100,
        width: 200,
        hideBtn(){
            return 'none';
        },
        handler(event){
            event.target.style.height = this.height + 'px'
            event.target.style.width = this.width + 'px'
            setTimeout(function(){
                event.target.style.display = this.hideBtn();
            }.bind(this), 500);
        }
    }

    // document.querySelector('#me').addEventListener('click', actionBox.handler)
    document.querySelector('#me').addEventListener('click', actionBox.handler.bind(actionBox))
 }

 


