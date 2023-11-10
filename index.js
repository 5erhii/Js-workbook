///---///---Math---///---///
//--- PI Приклад 1
console.log(Math.PI);
/*Виведе в консоль 
3.141592653589793
*/

//--- Math.max Math.min Приклад 2
const a = 5;
const b = 10;
const c = -5;
const arr = [20, 30, 40];

console.log(Math.max(a, b, c, ...arr));
console.log(Math.min(a, b, c, ...arr));
/*Виведе в консоль 
40
-5
*/

//--- Math.sign Приклад 3
const a3 = 5;
const b3 = 10;
const c3 = -5;
const d4 = "abcd";
const arr3 = [20, 30, 40];

console.log(Math.sign(d4));
/*Виведе в консоль 
NaN
*/

//--- Math.pow Приклад 4 Піднесення до степеня
const a4 = 5;

console.log(Math.pow(a4, 2));
console.log(Math.pow(a4, 3));
/*Виведе в консоль 
25
125
*/

//--- Math.sqrt Приклад 5 Квадратний корінь
const a5 = 25;

console.log(Math.sqrt(a5));
/*Виведе в консоль 
5
*/

//--- Math.floor(x) Приклад 6 Округлення числа
//до меншого цілого
console.log(Math.floor(1.1), Math.floor(1.8));
/*Виведе в консоль 
1  1
*/

//--- Math.ceil(x) Приклад 7 Округлення числа
//до бльшого цілого
console.log(Math.ceil(1.1), Math.ceil(1.8));
/*Виведе в консоль 
2  2
*/

//--- Math.round(x) Приклад 8 Округлення числа
//до найближчого цілого
console.log(Math.round(1.1), Math.round(1.8));
/*Виведе в консоль 
1  2
*/

//--- Math.trunc(x) Приклад 9 Округлення числа
//видаляє всі десяткові числа
console.log(Math.trunc(1.1), Math.trunc(1.8));
/*Виведе в консоль 
1  1
*/

//--- Math.random() Приклад 10
//повертає рандомне число від 0 до 1
console.log(Math.random());
/*Виведе в консоль 
0.1416392504606263
*/

//--- Math.random() Приклад 11
const random = Math.trunc(Math.random() * 10);
console.log(random);
const random1 = Math.trunc(Math.random() * 100);
console.log(random1);
const random2 = Math.trunc(Math.random() * 1000);
console.log(random2);
/*Виведе в консоль 
8
16
470
*/

//--- Math.fround(x) Приклад 12
//повертає число Х зі зменшеною точністю
console.log(0.1 + 0.2);
console.log(0.3);
console.log((0.1 + 0.2) === 0.3);
console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));
/*Виведе в консоль 
0.30000000000000004
0.3
false
true
*/



