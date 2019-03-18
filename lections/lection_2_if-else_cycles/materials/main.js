console.log("Lection_2");

/*
+ bool
+ logical and or
+ if else
+ if else if else // at home
+ тернарный оператор ? // at home
+ циклы основы
+ while () {}
+ do {} while()
+ for(){}

*/



// a = +prompt();
// x = -10;

// if (a < 0) {
//     console.log('x  <  0');
// }

// ------------------------

// if(a == 0){
//     console.log('a == 0');
// } else {
//     console.log('do something');
// }

// ------------------------

// z = 0;

// if (z){
//     console.log('do something');
// }


// ----
// catch NaN

// k = +prompt();

// // if(k == NaN) { // error
// //     console.log('k is NaN')
// // }

// if( isNaN(k) ) { 
//     console.log('k is NaN')
// }


// if(k < 0) {
//     console.log('error')
// } 

// ---------------------------------

// p = 0;

// k = 10;


// if (p == 0 || k == 0) {
//     console.log('WARNING');
// }

// if (p > 0 && k > 0){
//     console.log('TRUE')
// }


// ---------------------------------

// cycles


i = 0;
while(i < 10){
    console.log(i);
    // i++;
    i = i + 1;
}

console.log('---------------');

i = 0;
do {
    console.log(i);
    // i++;
    i = i + 1;
} while(i < 10);

console.log('---------------');


for(i = 0; i <= 10; i++){
    console.log(i);
}

console.log('AFTER FOR', i);

for(i = 0, k = 5; (i <= 10 && k != 0); i++, k--){
    console.log(i);
}

