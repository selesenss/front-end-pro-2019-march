console.log('Lection_5');



function f() { // function declaration
    console.log('in function: x = ', x);

    x += 200;
}



x = 10;

// f();
// f();
// f();

// console.log(x);

// -------------------------------------------

A = [1, 2, 3, 4]
B = [false, true, 'hello, ', 10]

function render(list){
    for(i = 0; i < list.length; i++){
        document.write(list[i], '_')
    }

    document.write('<br />')
}

// render(A);
// A.push(2)
// A.push(23)
// render(A);
// A.push(67)
// A.splice(2, 3)
// render(A);

// render(B);
// ----------------------------------------------



function sum(a, b){
    console.log(a + b)
}


// sum(10, 23)
// sum(0, +prompt())

str1 = 'Hello world!'
str2 = 'World Hello!'

// sum(str1, str2);


// ----------------------------------------------


function foo(value){
   res = (Math.pow(value, 5) + 200) / 13;

   return res;
}



arr = [6, 9, 23, 567, 213]


for(i = 0; i < arr.length; i++){
    arr[i] = foo(arr[i])
}

render(arr)

// --------------------------------

function sumElems(x,y,z) {
    return x + y + z;
}



a = 20;
b = -13;
c = 0;

res = sumElems(a, b, c);


console.log(res);
console.log( sumElems(a, b, c) )


// ----------------------------------------


function ssFF(a) {
    console.log(a*a, a+10)

    // return console.error('ERRORRRRRR')
}

console.log( ssFF(56) );