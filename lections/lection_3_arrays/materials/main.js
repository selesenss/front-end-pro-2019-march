console.log('Lection_3');

arr = [true, 8, -3, true, 'hello world'];

sum = arr[0] + arr[1];

// console.log(arr, sum);

// -------------------------------------------


// list = [1, 2, 3];

// list[0] = +prompt();

// console.log(list)


// -------------------------------------------


list = [2, 8, -2, 89, 1, 45];
// console.log(list.length);
sum = 0;
for(i = 0; i < list.length; i++){
    // console.log( 'i = ', i, 'list[i] = ', list[i] );

    sum += list[i];
}

// console.log('sum = ', sum)


// -------------------------------------

items1 = [2, 6, 7, 8]; // блок инициализации
items2 = new Array(2, 6, 7, 8);  // через конструктор


// -------------------
item3 = new Array(8); // items3.length -> 8

items4 = [];
items4.length = 8;

// -------------------

listAll = [1, 7, 8, 9, 4, 5];

console.log(listAll);
// listAll.length = 3;
console.log(listAll);
// listAll.length = 6;
// listAll.length = 40;
console.log(listAll);
listAll[10] = false;
console.log(listAll);


// -----------------------------------


A = [];
A.length = 20;
B = [];

for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*10);



    // A[i]
    isPrime = true;

    for(k = 2; k < A[i]; k++){
        if(A[i] % k == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime && A[i] > 1){
        B[B.length] = A[i];
    }
}

console.log('A -> ', A);
console.log('B -> ', B);