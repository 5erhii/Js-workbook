///---///---МАСИВ SET---///---///
//---Set Приклад 1
const set = new Set(["123", "123", "123"]);
console.log(set);
//Виведе в консоль Set(1) { '123' }

///---Set Приклад 2
const set1 = new Set(["123", "123", "123", 123, null]);
console.log(set1);
//Виведе в консоль Set(3) { '123', 123, null }

//---for of Приклад 3
const userIdList = new Set([40132, 45451, 6531, 506541]);
for (const value of userIdList) {
    console.log(value)
}
/*Виведе в консоль 
40132
45451
6531
506541
*/

//---forEach of Приклад 4
const userIdList3 = new Set([40132, 45451, 6531, 506541]);
userIdList3.forEach((value, value2, set) => console.log(value));
/*Виведе в консоль 
40132
45451
6531
506541
*/

//---size Приклад 5
const userIdList4 = new Set([40132, 45451, 6531, 506541]);
console.log(userIdList4.size);
/*Виведе в консоль 
4
*/

//---add Приклад 6 додає лише нові унікальні значення
const userIdList5 = new Set([40132, 45451, 6531, 506541]);
userIdList5.add(40132);
console.log(userIdList5);
userIdList5.add(40133);
console.log(userIdList5);
/*Виведе в консоль 
Set(4) { 40132, 45451, 6531, 506541 }
Set(5) { 40132, 45451, 6531, 506541, 40133 }
*/

//---delete Приклад 7 видаляє елементи
const userIdList7 = new Set([40132, 45451, 6531, 506541]);
userIdList7.add(40133);
console.log(userIdList7);
userIdList7.delete(40133);
console.log(userIdList7);
/*Виведе в консоль 
Set(5) { 40132, 45451, 6531, 506541, 40133 }
Set(4) { 40132, 45451, 6531, 506541 }
*/

//---has Приклад 8 
const userIdList8 = new Set([40132, 45451, 6531, 506541]);
console.log(userIdList8.has(40132));
/*Виведе в консоль 
true
*/

//---clear Приклад 9 
const userIdList9 = new Set([40132, 45451, 6531, 506541]);
userIdList9.clear();
console.log(userIdList9);
/*Виведе в консоль 
Set(0) {}
*/

//---keys Приклад 10
const userIdList10 = new Set([40132, 45451, 6531, 506541]);
const key = userIdList10.keys();
console.log(key);
/*Виведе в консоль 
[Set Iterator] { 40132, 45451, 6531, 506541 }
*/

//---values Приклад 11
const userIdList11 = new Set([40132, 45451, 6531, 506541]);
const value = userIdList11.values();
console.log(value);
/*Виведе в консоль 
[Set Iterator] { 40132, 45451, 6531, 506541 }
*/

//---entries Приклад 12
const userIdList12 = new Set([40132, 45451, 6531, 506541]);
const entrie = userIdList12.entries();
console.log(entrie);
/*Виведе в консоль 
[Set Entries] {
  [ 40132, 40132 ],
  [ 45451, 45451 ],
  [ 6531, 6531 ],
  [ 506541, 506541 ]
}
*/

//---fromEntries Приклад 13
const userIdList13 = new Set([40132, 45451, 6531, 506541]);
const entry = userIdList13.entries();
const obj = Object.fromEntries(entry);
console.log(obj);
/*Виведе в консоль 
{ '6531': 6531, '40132': 40132, '45451': 45451, '506541': 506541 }
*/

//--- деструктуризація Приклад 14
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set2 = new Set(arr);
const arr2 = [...set2];
console.log(arr2);
/*Виведе в консоль 
[ 1, 2, 3, 4, 5 ]
*/

//--- Приклад 15
const categoryList = new Set();
function addCategory(category) {
    if (categoryList.has(category)) {
        console.log("Such category is allready exist");
        return false;
    }
    categoryList.add(category);
    return true;
}
console.log(addCategory("sport"));
console.log(addCategory("sport"));
console.log(addCategory("food"));
/*Виведе в консоль 
true
Such categori is allready exist
false
true
*/

//--- Приклад 15
const students = [
    { id: 1, name: "John", course: "Math" },
    { id: 2, name: "Jane", course: "Science" },
    { id: 3, name: "Adam", course: "Math" },
    { id: 4, name: "Eve", course: "English" },
    { id: 5, name: "Kate", course: "Science" },
];
const courseList = new Set(students.map((student) => student.course));
console.log(courseList);
/*Виведе в консоль 
Set(3) { 'Math', 'Science', 'English' }
*/

//--- Приклад 16
const students1 = [
    { id: 1, name: "John", course: "Math" },
    { id: 2, name: "Jane", course: "Science" },
    { id: 3, name: "Adam", course: "Math" },
    { id: 4, name: "Eve", course: "English" },
    { id: 5, name: "Kate", course: "Science" },
];
const courseList1 = new Set(students.map((student) => student.course));
console.log(Array.from(courseList1));
/*Виведе в консоль 
[ 'Math', 'Science', 'English' ]
*/