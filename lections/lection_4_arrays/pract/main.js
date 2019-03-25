console.log('Lection_4');

const arr1 = [5,6,43,3,436,3,3,76,45,3];

let min = arr1[0];

for (i = 0; i < arr1.length; i++) {
  if ((i % 2 === 0) && (arr1[i] < min)) {
    min = arr1[i];
  }
}

console.log(min);

let sum = 0;
for (i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}

console.log(sum);

let avg = sum / arr1.length;

console.log(avg);