//Логычны оператори
//const userRole = 1;
//const adminRole = 2;
//const productPrice = 100;
//
//const ivanRole = userRole;
//const ivanBalance = 300;
//
//const isAdmin = ivanRole === adminRole;
//const canBuy = ivanBalance >= productPrice;
//
//const result1 = isAdmin === true;
//const result2 = canBuy === true;
//
//const result = result1 === result2;

//оператор порівняння. шукає перше позитивне 
const userRole = 1;
const adminRole = 2;
const productPrice = 100;

const defaultUserName = null;
const ivanName = null;

const ivanRole = userRole;
const ivanBalance = 300;

//або виконня рівності
const result = ivanRole === adminRole || ivanBalance >= productPrice;

console.log(result);

//Перше позитивне
//const authorName = ivanName || console.log("Test") || "Автор"
//console.log(authorName);

const authorName = ivanName === adminRole || "Автор";
console.log(authorName;

//Перше негативне, в іншому випадку бере останнє значення
const userRole = 1;
const adminRole = 2;
//в даному випадку буде false
const authorName = ivanName === adminRole && "Admin";
console.log(authorName;

const userRole = 2;
const adminRole = 2;
//в даному випадку буде Admin
const authorName = ivanName === adminRole && "Admin";
console.log(authorName;

// Перше наявне повертає переше значення яке не має Null або undefined
const userRole = 1;
const adminRole = 2;

const productStockPrice = 99;
const defaultProductPrice = 150;
const adminPrice = 0;

const productPrice = adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;

console.log("productPrice", productPrice);

//оперетор протилежне. якщо результат true То виведе  false і навпаки
const userRole = 1;
const adminRole = 2;

const authorName = !(ivanRole === adminRole && "Admin") || "User";
console.log("authorName", !authorName);
// якщо поставити !! то отримаємо логічний тип даних
// а саме замість null отримаємо false

//логічний оператор присвоєння

let productTitle = 'Навушники';

productTitle = productTitle || 'Назва товару'

console.log("productTitle", productTitle);
// ми отримаємо Навушники

let productTitle = '';

productTitle = productTitle || 'Назва товару'

console.log("productTitle", productTitle);
// ми отримаємо Назва тоару

//скоротимо конструкцію до логічного оператора присвоєння
let productTitle = 'Навушники';

productTitle ||= 'Назва товару'

console.log("productTitle", productTitle);
// ми отримаємо Навушники


