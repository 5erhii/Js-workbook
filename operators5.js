// побітові оператори
//ОПЕРАТОР ОБИДВА
//оскільки перші одиниці співпали то отримали 1 далі не співпали і отримали 000
let a = 11;
let b = 12;

console.log(a, a.toString(2));
//результат 1011
console.log(b, b.toString(2));
//результат 1100

let c = a & b;
console.log(c, c.toString(2));
//сума результатів 1000, або число 8

//приклад. оператор обидва для визначення чи є користувач адміном

const canRead = false;
const canWrite = true;
const csnDelete = false;
const canEdit = true;

let userRole = 0b0101;

let adminRole = 0b1111;

let isAdmin = userRole & adminRole;

console.log(isAddmin);
//якщо обидва значення співпадуть, то твердження підтвердиться

//або порівняємо двох користувачів
let userRole = 0b0101;

let adminRole = 0b1111;

let user2Role = 0b0001;

let isSameRole = (userRole & user2Role) === userRole;

console.log(isSameRole);



//ОПЕРАТОР МІНІМУМ ОДИН, коли мінімум одна одиниця то результат 1
let a = 4;
let b = 6;

console.log(a, a.toString(2));
//результат 100
console.log(b, b.toString(2));
//результат 110

let c = a | b;
console.log(c, c.toString(2));
//сума результатів 110, або число 6
//можна зобразити відразу двійковим кодом
let a = 0b1000;
let b = 0b1100;

let c = a | b;
console.log(c);

//приклад
const canRead = false;
const canWrite = true;
const csnDelete = false;
const canEdit = true;

let userRole = 0b0101;

let adminRole = 0b1111;

let user2Role = 0b1010;

let friendRole = userRole | user2Role;

console.log(friendRole === adminRole);

//ОПЕРАТОР ЛИШЕ ОДИН. коли співпала лише одна одиниця
//приклад
const canRead = false;
const canWrite = true;
const csnDelete = false;
const canEdit = true;

let userRole = 0b0101;

let adminRole = 0b1111;

let user2Role = 0b0110;

let friendRole = userRole ^ user2Role;

console.log(friendRole.toString(2));
//результат 0011

//ОПЕРАТОР ПРОТИЛЕЖНИИЙ. кожен біт змінюється на протилежний
//приклад
const canRead = false;
const canWrite = true;
const csnDelete = false;
const canEdit = true;

let userRole = 0b0101;

let adminRole = 0b1111;

let user2Role = 0b0110;

let friendRole = userRole ^ user2Role;

adminRole = ~adminRole;

console.log(userRole.toString(2));
//результат -10000

adminRole = ~userRolenRole;

console.log(userRole.toString(2));
//результат -110

//ОПЕРАТОР ЗМІЩЕННЯ ВЛІВО
//приклад отримання безкоштовного чаю при замовленні 4х чаїв
let freeTea = 0b00001;

freeTea = freeTea << 1;

console.log(freeTea.toString(2));

freeTea = freeTea << 1;

console.log(freeTea.toString(2));

freeTea = freeTea << 1;

console.log(freeTea.toString(2));

freeTea = freeTea << 1;

console.log(freeTea.toString(2));

console.log(freeTea === 0b10000);

//ОПЕРАТОР ЗМІЩЕННЯ ВПРАВО

let freeTea = 0b10000;

freeTea = freeTea >> 1;

console.log(freeTea.toString(2));

freeTea = freeTea >> 1;

console.log(freeTea.toString(2));

freeTea = freeTea >> 1;

console.log(freeTea.toString(2));

freeTea = freeTea >> 1;

console.log(freeTea.toString(2));

console.log(freeTea === 0b00001);

//ОПЕРАТОР ПРИСВОЄННЯ

let freeTea = 0b10000;

freeTea >>= 1;

console.log(freeTea.toString(2));

freeTea >>= 1;

console.log(freeTea.toString(2));

freeTea >>= 1;

console.log(freeTea.toString(2));

freeTea >>= 1;

console.log(freeTea.toString(2));

console.log(freeTea === 0b00001);

//ПРИКЛАД. МІКРОЧІП ДЛЯ ДУХОВКИ.
const a = 0b0001;
const b = 0b0010;
const c = 0b0100;

let settings = 0b0000;

settings |= a;
// 0001 кнопка включена

settings |= b;
// 0011 кнопка включена

isButtonOn = !((settings & c) === 0b0000);
console.log(isButtonCOn);


