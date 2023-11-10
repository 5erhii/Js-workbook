//Масив
const a = 1;
const b = 1;
const c = 1;

const getOne = () => 1;

let List = [
    function Name() { },
    100,
    "Text",
    null,
    undefined,
    1 + 2,
    5 < 6,
    getOne(),
    a,
    b,
    c``
];
console.log(list);
//Результат [[Function:Name],100,'Text',null,undefined,3,true,1,1,2,3]

//Масив за допомогою конструктора
const testArr = Array(5);//Масив містить 5 комірок
testArr[0] = "Start";
testArr[1] = 2;
testArr[20] = 20;

console.log(testArr);
//Виведе ['Start',2,<18 empty items>,20]
//Тобто кількість комірок автоматично збільшиться

const testArr = [];//Пустий масив
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;

console.log(testArr);//Виведе ['Start',2,20]

//Довжина масиву .length
const testArr = [];
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;

console.log(testArr.length);//Виведе 3

//Індекс останнього елемента в масиві
const testArr = [];
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

console.log(testArr[testArr.length - 1]);//Виведе 40

//Звернення до іменованої комірки
const testArr = [];
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

testArr["test"] = "Test123";

console.log(testArr.test);//Виведе Test123

//Ключове слово видалити
const testArr = [];
testArr[0] = "Start";
testArr[1] = 2;
testArr[2] = 20;
testArr[testArr.length] = 30;
testArr[testArr.length] = 40;

delete testArr[0];

console.log(testArr);//Виведе [<empty item>,2,20,30,40]

//Вкладені масиви
const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];

console.log(big[0][1][2]);//Виведе 4

//Ключове слово дл for з масивами
//for та of. Значення комірки
const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];

for (const point of location) {
    console.log(point);
}
//Виведе [100,200] [105,205] [110,190]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];

for (const point of location) {
    for (const coord of point) {
        console.log(coord);
    }
}
//Виведе 100 200 105 205 110 190

//for та in. Номер комірки
const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];

for (const point in location) {
    console.log(point);
}

//Виведе 0 1 2

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];

for (const pointIndex in location) {
    console.log(location[pointIndex]);
    for (const coordIndex in location[pointIndex]) {
        console.log(coordIndex);
    }
}//Виведе
// [100, 200]
//0
//1
//[105, 205]
//0
//1
//[110, 190]
//0
//1

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];

for (const pointIndex in location) {
    console.log(location[pointIndex]);
    for (const coordIndex in location[pointIndex]) {
        console.log(location[pointIndex][pointIndex]);
    }
}//Виведе
// [100, 200]
//100
//200
//[105, 205]
//105
//205
//[110, 190]
//110
//190

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
for (let i = 0; i < location.length; i++) {
    console.log(location[i]);
}//Виведе
//[100, 200]
//[105, 205]
//[110, 190]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
for (let i = 0; i < location.length; i++) {
    console.log(location[i]);
    for (let j = 0; j < location[i].length; j++) {
        console.log(location[i][j];)
    }
}//Виведе
// [100, 200]
//100
//200
//[105, 205]
//105
//205
//[110, 190]
//110
//190

//ПЕРЕТВОРЕННЯ НА РЯДОК
const l1 = Array();
const l2 = Array();

console.log(l1.toString() == l2.toString());
//Виведе true

const l1 = [1];
const l2 = [1];

console.log(l1.toString(), l2.toString());
//Виведе 1 1

const l1 = [1, 2, 3];
const l2 = [1, 2, 3];

console.log(l1.toString(), l2.toString());
//Виведе 1,2,3 1,2,3

const l1 = [1, 2, 3];
const l2 = [1, 2, 3];

console.log(l1.toString() === l2.toString());
//Виведе true

//ПОСИЛАННЯ НА МАСИВ
const l1 = [1, 2, 3];
const l2 = [1, 2, 3];

const l3 = l1;

console.log(l1, l3);
//Виведе [1,2,3] [1,2,3]

const l1 = [1, 2, 3];
const l2 = [1, 2, 3];

const l3 = l1;

delete l1[0];
console.log(l1, l3);
//Виведе [<1 empty item>,2,3] [<1 empty item>,2,3]

//ДЕСТРУКТКРИЗАЦІЯ
const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
const loc1 = location[0];
const loc2 = location[1];

const [a, b] = location;
console.log(a, b);
//Виведе [100,200] [105,205]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
const [loc1, loc2] = location;
console.log(loc1, loc2);
//Виведе [100,200] [105,205]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
const [loc1, loc3] = location; //Якщо потрібно пропустити значення, то ставимо кому замість значення
console.log(loc1, loc3);
//Виведе [100,200] [110,190]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
];
const [loc1, ...rest] = location; //Вказуємо назву комірки в котру кладемо інші змінні
console.log(loc1, rest);
//Виведе [100,200] [[110,190],[110,190]]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
    [120, 180],
];
const [loc1, ...rest] = location;
const [loc2, loc3, loc4 = "Test"] = rest;
console.log(loc4);
//Виведе [120, 180]

const location = [
    [100, 200],
    [105, 205],
    [110, 190],
    [120, 180],
];
const [loc1, ...rest] = location;
const [[p1, p2], loc3, loc4 = "Test"] = rest;
console.log(loc4);
//Виведе 105,205

const l1 = [1, 3, 2];
const l2 = [1, 2, 3];

const (...l3) = l1;

console.log(l1, l3);

delete l1[0];

console.log(l1, l3);
//Виведе [1,3,2] [1,2,3]
//[<1 empty item>,3,2] [<1 empty item>,3,2]

const l1 = null;
const l2 = [1, 2, 3];

const l3 = [...(l1 || [])];

console.log(l1, l3);


console.log(l1, l3);
//Виведе null[] null[]

const l1 = null;
const l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1, l3);


console.log(l1, l3);
//Виведе null[100] null[100]

const l1 = [2, 3, 4];
const l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1, l3);


console.log(l1, l3);
//Виведе [2,3,4][100,2,3,4]
//[2,3,4][100,2,3,4]

const l1 = [2, 3, 4];
const l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1, l3);

delete l1[0];

console.log(l1, l3);
//Виведе [2,3,4][100,2,3,4]
//[<1 empty item>,3,4][100,2,3,4]

let l1 = [2, 3, 4];
let l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1, l3);

delete l1[0];

console.log(l1, l3);

[l1, l3] = [l2, l3];

console.log(l1, l2);
//Виведе [2,3,4][100,2,3,4]
//[<1 empty item>,3,4][100,2,3,4]
//[1,2,3][100,2,3,4]

let l1 = [2, 3, 4];
let l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

console.log(l1, l3);

delete l1[0];

console.log(l1, l3);

[l1, l3] = [l2, l1];

console.log(l1, l2);
//Виведе [2,3,4][100,2,3,4]
//[<1 empty item>,3,4][100,2,3,4]
//[1,2,3][<1 empty item>,3,4]

let l1 = [2, 3, 4];
let l2 = [1, 2, 3];

const l3 = [100, ...(l1 || [])];

delete l1[0];

console.log(l1, l2);

[l1, l3] = [l2, l1];

console.log(l1, l2);
//Виведе
//[<1 empty item>,3,4][100,2,3,4]
//[1,2,3][<1 empty item>,3,4]

function printFullName(name, surname, lastname) {
    return `${name} ${surname} ${lastname}`;
}
console.log(printFullName('Ivan', 'Ivanenko', 'Ivanov'));
//Виведе Ivan Ivanenko Ivanov

function printFullName(...arg) {
    console.log(arg);
}
console.log(printFullName('Ivan', 'Ivanenko', 'Ivanov'));
//Виведе ['Ivan', 'Ivanenko', 'Ivanov']

function printFullName(...arg) {
    console.log(arg);
    return arg.toString();
}
console.log(printFullName('Ivan', 'Ivanenko', 'Ivanov'));
//Виведе Ivan,Ivanenko,Ivanov

function sumAllNum(...nums) {
    let sum = 0;
    for (const n in nums) {
        sum += n;
    }
    return sum;
}
console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));
//Виведе 00123456789101112131415

function sumAllNum(...nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}
console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16));
//Виведе 136

function sumAllNum(...nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return [sum, num.length];
}
const [sum, numLength] = sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
console.log(sum, numLength);
//Виведе 136 16

function printFullName([name, surname, lastname, ...arg]) {

    return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})` : ""}`;
}
console.log(printFullName(['Ivan', 'Ivanenko', 'Ivanov', 'Admin']));
//Виведе Ivan Ivanenko Ivanov (Admin)

console.log(printFullName(['Ivan', 'Ivanenko', 'Ivanov', 'Admin', '18']));
//Виведе Ivan Ivanenko Ivanov (Admin,18)