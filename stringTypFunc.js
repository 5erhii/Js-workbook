//Довжина рядка
const a = 'HelloWorld'

console.log(a.length); //результат 10, а саме кількість символів в рядку

//Створення рядка через кодове значення
console.log(String.fromCodePoint(128514));//ерзультат емоджі смайлик згідно UNICODE

//Код символа рядка за індексом
const b = 'Ŀ';
console.log(b.codePointAt(0));//виведе кодовий номер згідно таблиці Unicode 319

console.log(String.fromCodePoint(319)); //виведе Ŀ

//Створення сирого рядка
console.log(String.raw'www.test.com/home\ncatalog\category/new') //виведе рядоку в тому ж вигляді як і при введенні

//Обєднання рядків
const a = 'HelloWorld'
console.log(a.concat("", b, "", "!")); //виведе "HelloWorld Ŀ !"

//Перевірка на наявність рядка
const a = 'HelloWorld'
console.log(a.includes("lo"));//результат true
console.log(a.includes("He", 2));//результат false, бо ми вказали пошук з 3го символа

//Пошук індексу ряджка (порядкового номеру)
const a = 'HelloWorld'
console.log(a.indexOf("o", 6));//виведе "6" так як у JS відлік починається з 0 і дана буква є шостою
//якщо буде вказано відсутню букву, то результат -1
//якщо не вказти з якого символу шукати, то буде віднайдено перший подібний, тобто результат 4

//Пошук ндексу останнього рядка
const a = 'HeololoWorold'
console.log(a.indexOf("ol")); //виведе 10, так як це останнє співпадіння

//Перевірка на початок рядка
const a = 'HeololoWorold'
console.log(a.startsWith("He")); //виведе true
console.log(a.startsWith("eo", 1)); //виведе true, так як "H" це елемент 0, а "ео" це елемент 1

//Перевірка на кінець рядка
const a = 'HeololoWorold'
console.log(a.endsWith("ld")); //виведе true
console.log(a.endsWith("ld", 12)); //виведе false
console.log(a.endsWith("ld", 13)); //виведе true

//Символ рядка за індексом
const a = 'HeololoWorold'
console.log(a.at(0)); //виведе "H", виведе символ за його номером 

//Додати на кінець рядка
const c = "HelloWorld"
console.log(c.padEnd(15, 'Start'));//значення містить 10 символів і буде утворено нових 5 в кінці куди поміщено нові символи
//виведе "HelloWorldStart"
console.log(c.padEnd(15, 'End'));//в даному випадку слово менше
//виведе "HelloWorldEndEn", тобто буде заповнювати до 15

//Додати на початок рядка
const c = "HelloWorld"
console.log(c.padEnd(15, 'Start'));//значення містить 10 символів і буде утворено нових 5 на початку куди поміщено нові символи
//виведе "StartHelloWorld"

//Повторити задану кількість разів
const c = "HelloWorld"
console.log(c.repeat(5));//повторить рядок 5разів

//вирізати рядок
const c = "HelloWorld"
console.log(c.slice(5));//вказуємо по який символ вирізати, виведек "World"

console.log(c.slice(5, 7));//вказуємо з якого і по який символ вирізати, виведе "Wo"

console.log(c.slice(-1));//відлік буде з кінця, виведе "d"

//Зміна регістру рядка
const c = "HelloWorld"
console.log(c.toUpperCase());//виведе HELLOWORLD
console.log(c.toLowerCase());//виведе helloworld

//Видалення прогалини з рядка
const c = "      HelloWorld     "
console.log(c.trim());//видалить пробіли з обох боків
console.log(c.trimStart());//видалить пробіли з початку
console.log(c.trimEnd());//видалить пробіли з кінця