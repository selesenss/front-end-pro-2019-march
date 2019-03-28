console.log('homework 1');

// 1. Написать программу рассчета обьема цилиндра, все данные (кроме числа PI) вводятся с клавиатуры руками. (число Пи в js выглядит так: Math.PI). Также нужно вывести информацию в таком виде:
//
//   `**************`
//
//     `Обьем цилиндра с площадью основы *S* (вывети значение), радиусом *R* и высотой *H* равен:`
//
//     `--------------------`
//
//     `V = результат.`
//
//     `-------------------`
//
//     `end.`
//
//
//
// P.S. Все звездочки и черточки нужно нарисовать. Вывод выполнять в документ (document.write())

let rad;
let height;
let square;
let volume;
const pi = Math.PI;

do {
  rad = +prompt('Укажите радиус цилиндра (положительное число, больше 0)', '');
} while (isNaN(rad) || rad <= 0);

do {
  height = +prompt('Укажите высоту цилиндра (положительное число, больше 0)', '');
} while (isNaN(height) || height <= 0);

square = pi * rad * rad;
volume = square * height;

document.write('**************' +
  '<br /><br/>' +
  'Обьем цилиндра с площадью основы *' + square + '*, радиусом *' + rad + '* и высотой *' + height + '* равен:' +
  '<br/><br/>' +
  '--------------------' +
  '<br/><br/>' +
  'V = ' + volume +
  '<br/><br/>' +
  '-------------------' +
  '<br/><br/>' +
  'end.');


// 2. Ввести с клавиатуры 3 переменные (a, b, c). Привести их все в число. Выполнить операцию суммирования всех переменных.
//   Указать какие переменные являются чётными.
let a, b, c;

do {
  a = +prompt('Введите целое число "a"', '');
} while (isNaN(a));

do {
  b = +prompt('Введите целое число "b"', '');
} while (isNaN(b));

do {
  c = +prompt('Введите целое число "c"', '');
} while (isNaN(c));

let sum = a + b + c;


document.write('<br/><br/>//-------------------------------<br/><br/>');

document.write('Cумма всех чисел равна: ' + sum + '</br>');

document.write('</br> Из них четные числа: ');

if (a % 2 === 0) {
  document.write(a + ', ');
}

if (b % 2 === 0) {
  document.write(b + ', ');
}

if (c % 2 === 0) {
  document.write(c + ', ');
}

console.log(a,b,c);

if ((a % 2 !== 0) && (b % 2 !== 0) && (c % 2 !== 0)) {
  document.write('отсутствуют');
}