///---///---/// find знаходить перший елемент, що задовольняє умову
const userList = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
let age = 0;
const userBigAge = userList.sort((user1, user2) => {
    return user2.age - user1.age;
});
console.log(userBigAge[0]);
/*Виведе найстаршого користувача
{ id: 6412, name: 'Anton', age: 41 }
*/

///---///---/// find
const userList1 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
let minAge = 30;
const userBigAge1 = userList1.find(({ age }) => age >= 30);
console.log(userBigAge1);
/*Виведе першого користувача старше 30 років
{ id: 54, name: 'Ivan', age: 35 }
*/

///---///---/// findIndex
const userList2 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
let minAge2 = 30;
const userBigAge2 = userList2.findIndex(({ age }) => age >= minAge2);
console.log(userBigAge2);
/*Виведе індекс першого користувача старше 30 років
1
*/

///---///---/// findLast
const userList3 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
let minAge3 = 30;
const userBigAge3 = userList3.findLast(({ age }) => age >= minAge3);
console.log(userBigAge3);
/*Виведе останнього користувача старше 30 років
{ id: 6412, name: 'Anton', age: 41 }
*/

///---///---/// findLastIndex
const userList4 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
let minAge4 = 30;
const userBigAge4 = userList4.findLastIndex(({ age }) => age >= minAge4);
console.log(userBigAge4);
/*Виведе індекс останнього користувача старше 30 років
2
*/

///---///---/// keys()
const userList5 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
const iter5 = userList5.keys();
for (const elem5 of iter5) {
    console.log(elem5);
}

/*Виведе індекс 
0
1
2
*/

///---///---/// values()
const userList6 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
const iter6 = userList6.values();
for (const elem6 of iter6) {
    console.log(elem6);
}

/*Виведе 
{ id: 1, name: 'Dima', age: 19 }
{ id: 54, name: 'Ivan', age: 35 }
{ id: 6412, name: 'Anton', age: 41 }
*/

///---///---/// join()
const arr1 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
console.log(arr1.join(", "));
/*Виведе елементи обєднані комою та побілом
Apple, Hotdog, Bread, Milk
*/

///---///---/// join()
const arr2 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
console.log(arr2.join("... "));
/*Виведе елементи обєднані трьома точками та побілом
Apple... Hotdog... Bread... Milk
*/

///---///---/// splice()
const arr3 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
const arrSmall3 = arr3.splice(1);

console.log(arrSmall3);
/*Виведе елементи починаючи з першого а не нульового
[ 'Hotdog', 'Bread', 'Milk' ]
*/

///---///---/// splice()
const arr4 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
const arrSmall4 = arr4.splice(1, 2);

console.log(arrSmall4);
/*Видалить елементи починаючи з першого по другий
[ 'Hotdog', 'Bread' ]
*/

///---///---/// splice()
const arr5 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
const arrSmall5 = arr5.splice(1, 2, "Tea", "Cheese");

console.log(arrSmall5);
console.log(arr5);
/*Виалить елементи починаючи з першого по другий
а до старого масиву додасть нові елементи
[ 'Hotdog', 'Bread' ]
[ 'Apple', 'Tea', 'Cheese', 'Milk' ]
*/

///---///---/// splice()
const arr6 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
const arrSmall6 = arr6.splice(1, 2, "Tea", "Cheese");

console.log(arrSmall6);
console.log(arr6);
/*Не видалить жодні елементи 
а до старого масиву додасть нові елементи
[]
[ 'Apple', 'Tea', 'Cheese', 'Hotdog', 'Bread', 'Milk' ]
*/

///---///---/// slice()
const arr7 = [
    "Apple", "Hotdog", "Bread", "Milk"
];
const arrSmall7 = arr7.slice(1, 3,);
console.log("slice")
console.log(arrSmall7);
/*Залишить елементи починаючи з вказаного включно 
до вказано не включно
[]
[ 'Hotdog', 'Bread' ]
*/

///---///---/// reduce()
const userList7 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
const result = userList7.reduce((num, user, userIndex, array) => {
    console.log(num, user.age);
    return user.age > num ? user.age : num;
}, 1);
console.log(result);
/*Виведе 
1 19
19 35
35 41
41
*/

///---///---/// reduce()
const userList8 = [
    { id: 1, name: "Dima", age: 19, balance: 0 },
    { id: 54, name: "Ivan", age: 35, balance: 10200 },
    { id: 6412, name: "Anton", age: 41, balance: 300 },]
const totalBalance = userList8.reduce((num, user) => num + user.balance, 0);
console.log(totalBalance);
/*Виведе 
10500
*/

///---///---/// reduceRight()
const userList9 = [
    { id: 1, name: "Dima", age: 19 },
    { id: 54, name: "Ivan", age: 35 },
    { id: 6412, name: "Anton", age: 41 },
];
const result2 = userList9.reduceRight((num, user, userIndex, array) => {
    console.log(num, user.age);
    return user.age > num ? user.age : num;
}, 1);
console.log(result2);
/*Виведе 
1 41
41 35
41 19
41
*/

///---///---/// map()
const userList10 = [
    { id: 1, name: "Dima", age: 19, balance: 0 },
    { id: 54, name: "Ivan", age: 35, balance: 10200 },
    { id: 6412, name: "Anton", age: 41, balance: 300 },]
const result3 = userList.map((user, index, array) => {
    return user.name;
})
console.log(result3);
/*Виведе 
[ 'Anton', 'Ivan', 'Dima' ]
*/

///---///---/// map()
const userList11 = [
    { id: 1, name: "Dima", age: 19, balance: 0 },
    { id: 54, name: "Ivan", age: 35, balance: 10200 },
    { id: 6412, name: "Anton", age: 41, balance: 300 },]
const result4 = userList11.map((user, index, array) => {
    return user.name;
})
console.log(result4.join(", "));
/*Виведе 
Anton, Ivan, Dima
*/

///---///---/// map()
const userList12 = [
    { id: 1, name: "Dima", age: 19, balance: 0 },
    { id: 54, name: "Ivan", age: 35, balance: 10200 },
    { id: 6412, name: "Anton", age: 41, balance: 300 },]
const result5 = userList12.map((user, index, array) => {
    user.balanceLimit = 1000 - user.balance;

    if (user.balanceLimit < 0) {
        user.balanceLimit = 0;
    }

    return user;
})
console.log(result5);
/*Виведе 
[
  { id: 1, name: 'Dima', age: 19, balance: 0, balanceLimit: 1000 },
  { id: 54, name: 'Ivan', age: 35, balance: 10200, balanceLimit: 0 },
  { id: 6412, name: 'Anton', age: 41, balance: 300, balanceLimit: 700 }
]
*/

///---///---/// flatArray()
const flatArray = [
    [100, 200],
    [220, 230],
    [430, 455],
];
console.log(flatArray.flat());
/*Виведе 
[ 100, 200, 220, 230, 430, 455 ]
*/

///---///---/// flatArray()
const flatArray1 = [
    [
        [100, 105],
        [200, 205],
    ],
    [220, 230],
    [430, 455],
];
console.log(flatArray1.flat(2));
/*Виведе 
[
  100, 105, 200,
  205, 220, 230,
  430, 455
]
*/

///---///---/// flat()
const flatArray2 = [
    [
        [100, 105],
        [200, 205],
    ],
    [220, 230],
    [430, 455],
];
console.log(flatArray2.flat());
/*Виведе 
[ [ 100, 105 ], [ 200, 205 ], 220, 230, 430, 455 ]
*/

///---///---/// flatMap()
const flatArray3 = [
    [
        [100, 105],
        [200, 205],
    ],
    [
        [220, 230],
        [430, 455],
    ],
];
const result6 = flatArray3.map((el) => {
    return el.map((it) => {
        return it[0] - it[1];
    });
})
console.log(result6);
/*Виведе 
[ [ -5, -5 ], [ -10, -25 ] ]
*/

///---///---/// forEach()
const flatArray4 = [
    [
        [100, 105],
        [200, 205],
    ],
    [
        [220, 230],
        [430, 455],
    ],
];
const result7 = flatArray4.flatMap((el) => {
    return el.map((it) => {
        return it[0] - it[1];
    });
})
console.log(result7);

result7.forEach((elem, index, array) => {
    console.log(elem);
});

/*Виведе 
[ -5, -5, -10, -25 ]
-5
-5
-10
-25
*/