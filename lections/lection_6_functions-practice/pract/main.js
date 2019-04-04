// function sumAll(){
//     var sum = 0;
//
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//
//     return sum;
// }
//
//
// res = sumAll(2, 7, 8)
// console.log(res)
// res = sumAll(2, 7, 8, 8, 9, 34, 2, 2)
// console.log(res)


const arr1 = [2, 7, 8, 8, 9, 34, 2, 2];
const arr2 = [1, 5, 6, 7, 8];
const arr3 = [1];

function getCentral() {
  var resArr = [];

  for (var i = 0; i < arguments.length; i++) {
    var item = arguments[i];
    var isEven = item.length % 2 === 0;
    var central = Math.ceil(item.length/2) - 1;

    if(isEven) {
      resArr = resArr
    } else {

    }
  }
}


var result = getCentral(arr1, arr2, arr3);

// 2) Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с двумя аргументами числами.
//   `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.


// function doFun(a, b, fun) {
//   return fc(a, b);
// }
//
// function power(x, y) {
//   return Math.pow(x, y);
// }
//
// console.log(doFun(2, 3, Math.pow()));


function copy(arr) {
  return arr.slice();
}

console.log(copy([1, 4], function (value) { return value*10 }));