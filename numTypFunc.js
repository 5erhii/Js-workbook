const a = 10; // або const a = Number (10);

console.log(a);
//
const a = Number(10);
const b = 10;

console.log(a === b);

//EPSILON найменша можлива одиниця між двома числами
//приклад1
const a = 0.1;
const b = 0.2;
const c = 0.3;

console.log(Number.EPSILON);

//приклад2
const a = 0.1;
const b = 0.2;
const c = 0.3;

const d = a + b;

console.log(d - c < Number.EPSILON); //результат true
// або console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);
//результат також буде true

//Мінімальне та Максимальне безпечне число
const a = 0.0051;
const b = 0.0052;
const c = 0.00103;

const d = a + b;

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

//Мінімально  в максимально можливе число
const a = 0.0051;
const b = 0.0052;
const c = 0.00103;

const d = a + b;

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

//Перевірка на ціле число

function reviewNumber(num) {
    //або  if (Number.isNaN(num)) 
    if (isNaN(num)) {
        return console.log('Is not a number', num);
    }

    if (!num && nun !== 0) {
        return console.log('Bad number', num);
    }
    //проте isInteger з Nummber
    if (!Number.isInteger(num)) {
        return console.log('Дробове чмсло', num);
    }
    return console.log(num);
}
reviewNumber(10);

//Перевірка на безпечне ціле число
function reviewNumber(num) {

    if (isNaN(num)) {
        return console.log('Is not a number', num);
    }
    if (!num && nun !== 0) {
        return console.log('Bad number', num);
    }
    if (!Number.isInteger(num)) {
        return console.log('Дробове чмсло', num);
    }
    if (!Number.isSafeInteger(num)) {
        return console.log('Небезпечне число', num);
    }
    return console.log(num);
}
reviewNumber(Number.MAX_SAFE_INTEGER + 12);
//отрмаємо небезпечне число

//Обрізання десяткових чисел. округлює число
const a1 = 1.1234567;
const a2 = parseInt("1000", 2);

const a3 = parseFloat(a1 / toFixed(2));//2 це кількість знаків після крапки

console.log(a3); //виведе 1.12

//Округлення чисел
const a1 = 1123.4567;
const a2 = parseInt("1000", 2);

const a3 = parseFloat(a1.toPrecision(3));//3 кількість знаків числа в рядку при округленні

console.log(a3); //виведе 1120

//Число в експоненційній формі
//приклад1
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential(2);

console.log(a3); //виведе 1.00е+15

//приклад2
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential(2);
const a4 = parseFloat(a3);

console.log(a4); //виведе 1000000000000000

//приклад3
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential(2);
const a4 = parseInt(a3);

console.log(a4); //виведе 1

//приклад4
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential(2);
const a4 = Number(a3);

console.log(a4); //виведе 1000000000000000

//приклад5
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential();
const a4 = Number(a3);

console.log(a3, a4); //виведе 9.99999999994567e+14 та 999999999994567

//приклад6
const a1 = 999999999994567;
const a2 = parseInt("1000", 2);
const a3 = a1.toExponential();
const a4 = parseFloat(a3);

console.log(a3, a4); //виведе 9.99999999994567e+14 та 999999999994567

//приклад7
const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);

console.log(a1 === a3); //виведе true

//Перетворення числа в рядок
//приклад1
const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString()

console.log(a4); //виведе 94567 як рядок

//приклад2
const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString(2)//в двійковій системі

console.log(a4); //виведе 10111000101100111

//приклад3
const a1 = 94567;
const a2 = a1.toExponential();
const a3 = parseFloat(a2);
const a4 = a3.toString(32)//в системі 32

console.log(a4); //виведе 2sb7


