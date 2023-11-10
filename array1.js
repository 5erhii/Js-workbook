console.log(Array.from({ 0: "Hello", 1: "World", 2: "!!!", length: 3 }));
//Виведе [ 'Hello', 'World', '!!!' ]

///---///---///
console.log(Array.from(
    {
        0: "Hello",
        1: "World",
        2: "!!!",
        length: 3,
    }, (elem, index) => {
        console.log(elem, index);
    }));
/*Виведе
Hello 0
World 1
!!! 2
[ undefined, undefined, undefined ]
*/

///---///---///
console.log(Array.from(
    {
        0: "Hello",
        1: "World",
        2: "!!!",
        length: 3,
    },
    (elem, index) => {
        console.log(elem, index);

        return elem;
    }));
/*Виведе
Hello 0
World 1
!!! 2
[ 'Hello', 'World', '!!!' ]
*/

///---///---///
const obj = {
    0: "Hello",
    1: "World",
    2: "!!!",
    length: 3,
}
console.log(Array.from(
    obj,
    function (elem, index) {
        console.log(this);
        console.log(elem, index);
        return elem;
    },
    obj
));
/*Виведе
{ '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
Hello 0
{ '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
World 1
{ '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
!!! 2
[ 'Hello', 'World', '!!!' ]
*/

///---///---///
const obje = {
    0: "Hello",
    1: "World",
    2: "!!!",
    length: 3,
}
console.log(Array.from(
    obje,
    function (elem, index) {
        console.log(this.length);
        console.log(elem, index);
        return elem;
    },
    obje
));
/*Виведе
3
Hello 0
3
World 1
3
!!! 2
[ 'Hello', 'World', '!!!' ]
*/

///---///---///
const obg = {
    0: "Hello",
    1: "World",
    2: "!!!",
    length: 3,
    prefix: "():",
}
console.log(Array.from(
    obg,
    function (elem, index) {
        return `${this.prefix}${elem}`;
    },
    obg
));
/*Виведе
[ '():Hello', '():World', '():!!!' ]
*/

///---///---///
const obc = {
    0: "Hello",
    1: "World",
    2: "!!!",
    length: 3,
    prefix: "():",
}
const arr = Array.from(
    obc,
    function (elem, index) {
        return `${this.prefix}${elem}`;
    },
    obc
);
console.log(Array.isArray(arr));
/*Виведе
true
*/

///---///---///
console.log(Array.of(1, 2, 3, 4, 5));
/*Виведе
[ 1, 2, 3, 4, 5 ]
*/

///---///---///
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(Array.of(...arr1, ...arr2));
/*Виведе
[ 1, 2, 3, 4, 5, 6 ]
*/

///---///---///
const arr9 = [1, 2, 3];
const arr10 = [4, 5, 6];

console.log([...arr9, ...arr10]);
/*Виведе
[ 1, 2, 3, 4, 5, 6 ]
*/

///---///---/// index
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

console.log(arr3.at(1));
/*Виведе елемент за індексом
2
*/

///---///---/// push
let arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

console.log(arr5.push(10, 20, 30));
/*Виведе кількість елементів
6
*/

///---///---/// pop
let arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];

console.log(arr7.pop());
/*Виведе значення останнього ивдаленого елемента
3
*/

///---///---/// shift
let arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];

console.log(arr11.shift());
/*Виведе значення зсунутого, видаленого елемента
1
*/

///---///---/// unshift
let arr13 = [1, 2, 3];
const arr14 = [4, 5, 6];

console.log(arr13.unshift());
/*Виведе значення довжини масиву, додає елементи на початок
3
*/

///---///---/// includes
let arr15 = [1, 2, 3];
const arr16 = [4, 5, 6];

console.log(arr16.includes(5));
/*Виведе наявність чи відсутність елемента в масиві
true
*/

///---///---/// indexOf
let arr22 = [1, 2, 3];
const arr23 = [4, 5, 6];

console.log(arr23.indexOf(5));
/*Виведе індекс першого елемента з вказаним значенням
1
*/

///---///---/// indexOf
let arr17 = [1, 2, 3];
const arr18 = [4, 5, 6, 5];

console.log(arr18.lastIndexOf(5));
/*Виведе індекс останнього елемента з вказаним значенням
3
*/

///---///---/// concat
let arr19 = [1, 2, 3];
const arr20 = [4, 5, 6];

const arr21 = arr19.concat(...arr20)
console.log(arr21);
/*Виведе новий обєднаний масив
[ 1, 2, 3, 4, 5, 6 ]
*/

///---///---/// copyWithin
let arr24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr25 = [4, 5, 6];

arr24.copyWithin(2, 6, 8);
console.log(arr24);
/*вказуємо з якого елементу включно 2 замінити
на починаючи з котрого взяти інфо/значення - 6 та по котрий не включно - 8
Виведе новий масив в котрому будуть замінені елементи 2, 3 на 6, 7
[
  0, 1, 6, 7, 4,
  5, 6, 7, 8, 9
]
*/

///---///---/// fill
let arr26 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr26.fill(2, 6, 9);
console.log(arr26);
/*вказуємо який елемент взяти для заміни - 2, 
можна вказати довільне значення, навіть текст.
на починаючи з котрого замінити - 6 та по котрий не включно - 9
Виведе новий масив в котрому будуть замінені елементи 6,7,8 на 2
[
  0, 1, 2, 3, 4,
  5, 2, 2, 2, 9
]
*/

///---///---/// reverse
let arr27 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr27.reverse();
console.log(arr27);
/*Змінить порядок елементів останній стане першим, а перший останнім
[
  9, 8, 7, 6, 5,
  4, 3, 2, 1, 0
]
*/

///---///---/// filter
let arr28 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterArr = arr28.filter((value, index, array) => value % 2);
console.log(filterArr);
/*Виведе елементи що діляться з остачею
0 не виведе бо автоматично перетворється на false
[ 1, 3, 5, 7, 9 ]
*/

///---///---/// filter
let arr29 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterArr29 = arr29.filter((value, index, array) => value % 2 === 0);
console.log(filterArr29);
/*Виведе елементи що діляться без остачі
в такому випадку виведе також 0
[ 0, 2, 4, 6, 8 ]
*/

///---///---/// filter
let arr30 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterFn = (value, index, array) => value % 2 === 0;
//Ми вивели фільтр в окрему функцію
const filterArr31 = arr30.filter(filterFn);
console.log(filterArr31);
/*Виведе елементи що діляться без остачі
в такому випадку виведе також 0
[ 0, 2, 4, 6, 8 ]
*/

///---///---/// sort
const sortedArr = [1, 20, 10, 2, 40, 3, 4, 30].sort();
console.log(sortedArr);
/*Виведе елементи відсортовані згідно юнікоду
[
  1, 10, 2, 20,
  3, 30, 4, 40
]
*/

///---///---/// sort
const sortFn = (elem1, elem2) => elem1 - elem2;
/*ми вказуємо що має бути порівняння 1го і 2го, 2го і 3го і.т.д
або const sortFn = (elem1, elem2) => {
    return elem1 > elem2 ? 1 : -1;
}
або const sortFn = (elem1, elem2) => {
    let result = elem1 - elem2;
*/
const sortedArr1 = [1, 20, 10, 2, 40, 3, 4, 30].sort(sortFn);
console.log(sortedArr1);
/*Виведе елементи відсортовані правильно
[
   1,  2,  3,  4,
  10, 20, 30, 40
]
*/

///---///---/// sort
const sortFn1 = (elem1, elem2) => -(elem1 - elem2);
/*ми вказуємо що має бути порівняння 1го і 2го, 2го і 3го і.т.д
вказавши знак мінус - перед дужками, задали зворотній порядок
або вказавши (elem2 - elem1)
або const sortFn = (elem1, elem2) => {
    return elem1 < elem2 ? 1 : -1;
}
*/
const sortedArr2 = [1, 20, 10, 2, 40, 3, 4, 30].sort(sortFn1);
console.log(sortedArr2);
/*Виведе елементи відсортовані в зоротньому порядку
[
  40, 30, 20, 10,
   4,  3,  2,  1
]
*/

///---///---/// sort
const sortFn2 = (elem1, elem2) => {
    if (elem1 % 2 === elem2 % 2) {//якщо обидва елементи діляться і мати однакову остачу, тобто порядок однаковий
        return 0;
    } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {//елем1 ділиться з остачею а елем2 без остачі
        return 1;
    } else {
        return -1;
    }
};
const sortedArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(sortFn2);
console.log(sortedArr3);
/*Виведе елементи відсортовані спочатку парні за зростанням, а потім непарні
[
   2,  4,  6,  8, 10, 12,
  14, 16,  1,  3,  5,  7,
   9, 11, 13, 15
]
*/

///---///---/// every якщо всі елементи задовольняють умову
let arr32 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr32.every((elem, index, array) => elem >= 0));
/*Виведе true оскільки всі елементи більші 0
true
*/

///---///---/// some якщо хоч один елемент задовольняє умову
let arr33 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr33.some((elem, index, array) => elem >= 0));
/*Виведе true існують елементи більші 0
true
console.log(arr33.some((elem, index, array) => elem >= 0));
Виведе true існує 1 елемент менше 0
*/