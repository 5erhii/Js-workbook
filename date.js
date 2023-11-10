///---///---Date---///---///
//--- Date() Приклад 1
const date1 = new Date();
console.log(date1);
/*Виведе в консоль 
2023-11-08T15:42:16.482Z
*/

//--- toISOString() Приклад 2
const date2 = new Date();
console.log(date2.toISOString());
/*Виведе в консоль 
2023-11-08T15:42:16.491Z
*/

//--- Date() в браузері Приклад 3
const date3 = new Date();
console.log(date3);
/*Виведе в консоль 
VM119:2 Wed Nov 08 2023 17:43:31 GMT+0200 (Восточная Европа, стандартное время)
*/

//--- Date.parse  Приклад 4
const date4 = new Date();
const dateString4 = date4.toISOString();
console.log(dateString4);
const date44 = Date.parse(dateString4);
console.log(date44);
/*Виведе в консоль 
2023-11-08T15:50:22.484Z
1699458622484
*/

//--- toString() Приклад 5
const date5 = new Date();
console.log(date5.toString());
/*Виведе в консоль 
Wed Nov 08 2023 17:55:51 GMT+0200 (Восточная Европа, стандартное время)
*/

//--- toUTCString() Приклад 6
const date6 = new Date();
console.log(date6.toUTCString());
/*Виведе в консоль 
Wed, 08 Nov 2023 15:56:50 GMT
*/

//--- toDateString() Приклад 7
const date7 = new Date();
console.log(date7.toDateString());
/*Виведе в консоль 
Wed Nov 08 2023
*/

//--- toTimeString() Приклад 8
const date8 = new Date();
console.log(date8.toTimeString());
/*Виведе в консоль 
18:01:03 GMT+0200 (Восточная Европа, стандартное время)
*/

//--- getTimezoneOffset() Приклад 9
const date9 = new Date();
const zone = date8.getTimezoneOffset();
console.log(zone);
/*Виведе в консоль 
-120
*/

//--- getTimezoneOffset() Приклад 10
const date10 = new Date();
const zone10 = date10.getTimezoneOffset() / -60;
console.log(zone10);
/*Виведе в консоль 
2
*/

//--- Приклад 11
const user11 = -3;
function getUserTimeZone(timezone) {
  const date11 = Date.now();
  return date11;
}
console.log(getUserTimeZone(user11));
console.log(new Date().toString());
/*Виведе в консоль 
1699465979264
Wed Nov 08 2023 19:52:59 GMT+0200 (Восточная Европа, стандартное время)
*/

//--- Приклад 12
const user12 = -3;
function getUserTimeZone12(timezone) {
  let date12 = Date.now();
  const myTimezone12 = new Date().getTimezoneOffset() / -60;
  date12 -= 1000 * 60 * 60 * myTimezone12;
  return date12;
}
console.log(new Date().toString(getUserTimeZone12(user12)).toString());
console.log(new Date().toUTCString());
/*Виведе в консоль 
Wed Nov 08 2023 20:07:09 GMT+0200 (Восточная Европа, стандартное время)
Wed, 08 Nov 2023 18:07:09 GMT
*/

//--- Приклад 13
const user13 = -3;
function getUserTimeZone13(timezone) {
  let date13 = new Date(2023, 5, 26, 12, 30, 0, 0);
  console.log(date13);
  const myTimezone13 = date13.getTimezoneOffset() / -60;
}
getUserTimeZone13(user13);
/*Виведе в консоль 
2023-06-26T09:30:00.000Z
*/

//--- Date.UTC Приклад 14
const user14 = -3;
function getUserTimeZone14(timezone) {
  let date14 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date14);
  const myTimezone14 = date14.getTimezoneOffset() / -60;
}
getUserTimeZone14(user14);
/*Виведе в консоль 
2023-06-26T12:30:00.000Z
*/

//---toUTCString Приклад 15
const user15 = -3;
function getUserTimeZone15(timezone) {
  let date15 = new Date(2023, 5, 26, 12, 30, 0, 0);
  console.log(date15.toUTCString());
  const myTimezone15 = date15.getTimezoneOffset() / -60;
}
getUserTimeZone15(user15);
/*Виведе в консоль 
Mon, 26 Jun 2023 09:30:00 GMT
*/

//--- Приклад 16
const user16 = -3;
function getUserTimeZone16(timezone) {
  let date16 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date16.getTime());
  const myTimezone16 = date16.getTimezoneOffset() / -60;
}
getUserTimeZone16(user16);
console.log(new Date(1687782600000).toString())
/*Виведе в консоль 
1687782600000
Mon Jun 26 2023 15:30:00 GMT+0300 (Восточная Европа, летнее время)
*/

//--- Приклад 17
const user17 = -3;
function getUserTimeZone17(timezone) {
  let date17 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date17.toUTCString());
  const myTimezone17 = date17.getTimezoneOffset() / -60;
  date17.setTime(date17.getTime() - 1000 * 60 * 60 * myTimezone17);
  date17.setTime(date17.getTime() + 1000 * 60 * 60 * timezone);
  return date17;
}
const userDate17 = getUserTimeZone17(user17);

console.log(userDate17.toUTCString());
/*Виведе в консоль 
Mon, 26 Jun 2023 12:30:00 GMT
Mon, 26 Jun 2023 06:30:00 GMT
*/

//--- getHours() getUTCHours() Приклад 18
const user18 = -3;
function getUserTimeZone18(timezone) {
  let date18 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date18.getHours());
  console.log(date18.getUTCHours());
  return date18;
}
const userDate18 = getUserTimeZone18(user18);

console.log(userDate18.toUTCString());
/*Виведе в консоль 
15
12
Mon, 26 Jun 2023 12:30:00 GMT
*/

//--- setHours() setUTCHours() Приклад 19
const user19 = -3;
function getUserTimeZone19(timezone) {
  let date19 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date19.getHours());
  console.log(date19.getUTCHours());
  date19.setHours(date19.getUTCHours() + timezone)
  return date19;
}
const userDate19 = getUserTimeZone19(user19);

console.log(userDate19.getHours());
console.log(userDate19.getUTCHours());
console.log(userDate18.toString());
/*Виведе в консоль 
15
12
9
6
Mon Jun 26 2023 15:30:00 GMT+0300 (Восточная Европа, летнее время)
*/

//--- setFullYear()  getFullYear() Приклад 20
const date20 = new Date();
const dateString20 = date20.toISOString();
console.log(date20.getFullYear());
date20.setFullYear(2020);
console.log(date20.getFullYear());
console.log(date20);
/*Виведе в консоль 
2023
2020
2020-11-08T20:29:13.257Z
*/

//--- setMonth()  getMonth() Приклад 21
const date21 = new Date();
const dateString21 = date21.toISOString();

console.log('year', date21.getFullYear());
date21.setFullYear(2020);
console.log('year', date21.getFullYear());

console.log('month', date21.getMonth());
date21.setMonth(0);
console.log('month', date21.getMonth());
/*Виведе в консоль 
year 2023
year 2020
month 10
month 0
*/

//--- setDate()  getDate() getDay() Приклад 22
const date22 = new Date();
const dateString22 = date22.toISOString();

console.log('year', date22.getFullYear());
date22.setFullYear(2020);
console.log('year', date22.getFullYear());

console.log('month', date22.getMonth());
date22.setMonth(0);
console.log('month', date22.getMonth());

console.log('date', date22.getDate());
date22.setDate(31);
console.log('date', date22.getDate());

console.log('day', date22.getDay());

console.log(date22);
/*Виведе в консоль 
year 2023
year 2020
month 10
month 0
date 8
date 31
day 5
2020-01-31T20:55:22.525Z
*/

//--- setMinutes()  getMinutes() Приклад 23
const date23 = new Date();
const dateString23 = date23.toISOString();

console.log('minutes', date23.getMinutes());
console.log(date23);

date23.setMinutes(31);
console.log('minutes', date23.getMinutes());
console.log(date23);
/*Виведе в консоль 
minutes 5
2023-11-08T21:05:11.599Z
minutes 31
2023-11-08T21:31:11.599Z
*/

//--- setSeconds()  getSeconds()Приклад 24
const date24 = new Date();
const dateString24 = date24.toISOString();

console.log('seconds', date24.getSeconds());
console.log(date24);

date24.setSeconds(31);
console.log('seconds', date24.getSeconds());
console.log(date24);
/*Виведе в консоль 
seconds 38
2023-11-08T21:08:38.209Z
seconds 31
2023-11-08T21:08:31.209Z
*/

//--- setMilliseconds()  getMilliseconds()Приклад 25
const date25 = new Date();
const dateString25 = date25.toISOString();

console.log('milliseconds', date25.getMilliseconds());
console.log(date25);

date25.setMilliseconds(500);
console.log('milliseconds', date25.getMilliseconds());
console.log(date25);
/*Виведе в консоль 
milliseconds 365
2023-11-08T21:10:46.365Z
milliseconds 500
2023-11-08T21:10:46.5001Z
*/