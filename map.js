///---///---СЛОВНИК Map---///---///
//--- Приклад 1
const dictionary = new Map();
console.log(dictionary);

/*Виведе в консоль 
Map(0) {}
*/

//--- Приклад 2
const button1 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
console.log(button1);

/*Виведе в консоль 
Map(2) { 'color' => 'red', 'size' => '32px' }
*/

//--- Приклад 3
const obj = {
    color: "red",
    size: 32 + "px",
};
const button2 = new Map(Object.entries(obj));
console.log(button2);

/*Виведе в консоль 
Map(2) { 'color' => 'red', 'size' => '32px' }
*/

//--- Приклад 4
const set1 = new Set(["red", "32px"]);
const button3 = new Map(set1.entries());
console.log(button3);

/*Виведе в консоль 
Map(2) { 'red' => 'red', '32px' => '32px' }
*/

//--- Приклад 5
const set2 = new Set(["red", "32px"]);
const button4 = new Map(Object.entries(Object.fromEntries(set2.entries())));
console.log(button4);
/*Виведе в консоль 
Map(2) { 'red' => 'red', '32px' => '32px' }
*/
console.log(button4.entries());
/*Виведе в консоль 
[Map Entries] { [ 'red', 'red' ], [ '32px', '32px' ] }
*/

//--- Приклад 6
const button6 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
const set6 = new Set(button6);
console.log(set6);

/*Виведе в консоль 
Set(2) { [ 'color', 'red' ], [ 'size', '32px' ] }
*/

//--- values Приклад 7
const button7 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
const set7 = new Set(button7.values());
console.log(set7);
/*Виведе в консоль 
Set(2) { 'red', '32px' }
*/

//--- keys Приклад 8
const button8 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
const set8 = new Set(button8.keys());
console.log(set8);
/*Виведе в консоль 
Set(2) { 'color', 'size' }
*/

//--- for of Приклад 9
const button9 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
for (const [key, value] of button9) {
    console.log(key, value);
}
/*Виведе в консоль 
color red
size 32px
*/

//--- for of Приклад 10
const button10 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
for (const value of button10) {
    console.log(value);
}
/*Виведе в консоль 
[ 'color', 'red' ]
[ 'size', '32px' ]
*/

//--- forEach Приклад 11
const button11 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
button11.forEach((value, key, map) => console.log(value, key, map));
/*Виведе в консоль 
red color Map(2) { 'color' => 'red', 'size' => '32px' }
32px size Map(2) { 'color' => 'red', 'size' => '32px' }
*/

//--- size Приклад 12
const button12 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
console.log(button12.size);
/*Виведе в консоль 
2
*/

//--- set Приклад 13
const button13 = new Map([
    ["color", "red"],
    ["size", "32px"],
]);
button13.set("color", "blue");
button13.set("weight", 600);
console.log(button13);
/*Виведе в консоль 
Map(3) { 'color' => 'blue', 'size' => '32px', 'weight' => 600 }
*/

//--- get(key) Приклад 14
const button14 = new Map([
    ["color", "red"],
    ["size", "32px"],
    ["weight", 600],
]);
console.log(button14.get("weight"));
/*Виведе в консоль 
600
*/

//--- delete(key) Приклад 15
const button15 = new Map([
    ["color", "red"],
    ["size", "32px"],
    ["weight", 600],
]);
console.log(button15.delete("weight"));
/*Виведе в консоль 
true
*/

//--- has(key) Приклад 16
const button16 = new Map([
    ["color", "red"],
    ["size", "32px"],
    ["weight", 600],
]);
console.log(button16.has("weight"));
/*Виведе в консоль 
true
*/

//--- clear(key) Приклад 17
const button17 = new Map([
    ["color", "red"],
    ["size", "32px"],
    ["weight", 600],
]);
button17.clear();
console.log(button17);
/*Виведе в консоль 
Map(0) {}
*/

//---  Приклад 18
const LANG_LIST = {
    UA: "uk-UA",
    EU: "eu-US",
}
const activeLang = LANG_LIST.EU;
const product = {
    price: 100,
    amount: 3,
    info: new Map([
        [
            LANG_LIST.UA,
            {
                title: "Заголовок",
                info: "Інформація",
            },
        ],
        [
            LANG_LIST.EU,
            {
                title: "Title",
                info: "Info",
            },
        ],
    ]),
};
console.log(product);
/*Виведе в консоль 
{
  price: 100,
  amount: 3,
  info: Map(2) {
    'uk-UA' => { title: 'Заголовок', info: 'Інформація' },
    'eu-US' => { title: 'Title', info: 'Info' }
  }
}
*/
const info = product.info.get(activeLang);
console.log(info);
/*Виведе в консоль 
{ title: 'Title', info: 'Info' }
*/


//--- clear(key) Приклад 19
const user1 = {
    id: 1323,
    name: "Ivan",
};
const user2 = {
    id: 4231,
    name: "Anton",
};
const product1 = {
    id: 5341,
    title: "Android",
};
const product2 = {
    id: 5355,
    title: "Iphone",
};
const userProduct = new Map();
userProduct.set(user1, product1).set(user2, product2);
console.log(userProduct);
/*Виведе в консоль 
Map(2) {
  { id: 1323, name: 'Ivan' } => { id: 5341, title: 'Android' },
  { id: 4231, name: 'Anton' } => { id: 5355, title: 'Iphone' }
}
*/
console.log(userProduct.has(user1));
/*Виведе в консоль 
true
*/
console.log(userProduct.get(user1));
/*Виведе в консоль 
{ id: 5341, title: 'Android' }
*/
const productClientList1 = new Map();
productClientList1.set(product1, new Set());
console.log(productClientList1);
/*Виведе в консоль 
Map(1) { { id: 5341, title: 'Android' } => Set(0) {} }
*/
const productClientList2 = new Map([[product1, new Set()]]);
productClientList2.set(product1, productClientList2.get(product1).add(user1));
console.log(productClientList2);
/*Виведе в консоль 
Map(1) {
  { id: 5341, title: 'Android' } => Set(1) { { id: 1323, name: 'Ivan' } }
}
*/
productClientList2.set(product1, productClientList2.get(product1).add(user2));
console.log(productClientList2);
/*Виведе в консоль 
Map(1) {
  { id: 5341, title: 'Android' } => Set(2) { { id: 1323, name: 'Ivan' }, { id: 4231, name: 'Anton' } }    
}
*/
const has = productClientList2.get(product1).has(user1);
console.log(has);
/*Виведе в консоль
true
*/
