///---///---JSON---///---///
//---stringify Приклад 1
const data = {
    id: 1043,
    login: "user3431",
    password: "123451we@",
    role: "Admin",
};
const jsonData = JSON.stringify(data);
console.log(jsonData);
/*Виведе в консоль 
{"id":1043,"login":"user3431","password":"123451we@","role":"Admin"}
*/

//---parse Приклад 2
const data1 = {
    id: 1043,
    login: "user3431",
    password: "123451we@",
    role: "Admin",
};
const jsonData1 = JSON.stringify(data1);
console.log(jsonData1);
const parseData1 = JSON.parse(jsonData1);
console.log(parseData1);
/*Виведе в консоль 
{ id: 1043,
login: 'user3431',
password: '123451we@',
role: 'Admin' }
*/

//---url Приклад 3
const url = new URL("/path", "https://www.example.com");
// або const url = new URL("https://www.example.com/path");
console.log(url);
/*Виведе в консоль 
URL {
  href: 'https://www.example.com/path',
  origin: 'https://www.example.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.example.com',
  hostname: 'www.example.com',
  port: '',
  pathname: '/path',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
*/

//---href Приклад 4
const url4 = new URL("https://www.example.com/path");
console.log(url4.href);
/*Виведе в консоль 
https://www.example.com/path
*/

//---pathname Приклад 5
const url5 = new URL("https://www.example.com/catalog/category-1/product-name/info");
console.log(url5.pathname);
/*Виведе в консоль 
/catalog/category-1/product-name/info
*/

//---origin Приклад 6
const url6 = new URL("https://www.example.com/catalog/category-1/product-name/info");
console.log(url6.origin);
/*Виведе в консоль 
https://www.example.com
*/

//---host Приклад 7
const url7 = new URL("https://www.example.com:4000/catalog/category-1/product-name/info").host;
console.log(url7);
/*Виведе в консоль 
www.example.com:4000
*/

//---hostname Приклад 8
const url8 = new URL("https://www.example.com:4000/catalog/category-1/product-name/info").hostname;
console.log(url8);
/*Виведе в консоль 
www.example.com
*/

//---hash Приклад 9
const url9 = new URL("https://www.example.com:4000/catalog/category-1/product-name/info#how-to-do").hash
console.log(url9);
/*Виведе в консоль 
#how-to-do
*/
console.log(url9.slice(1));
/*Виведе в консоль 
how-to-do
*/

//---password Приклад 10
const url10 = new URL("https://admin:45-32131@www.example.com:4000/catalog/category-1/product-name/info#how-to-do").password
console.log(url10);
/*Виведе в консоль 
45-32131
*/

//---port Приклад 11
const url11 = new URL("https://www.example.com:4000/catalog/category-1/product-name/info").host;
console.log(url11);
/*Виведе в консоль 
4000
*/

//---username Приклад 12
const url12 = new URL("https://admin:45-32131@www.example.com:4000/catalog/category-1/product-name/info#how-to-do").username
console.log(url12);
/*Виведе в консоль 
admin
*/

//---search Приклад 13
const url13 = new URL("https://www.google.com/search?client=opera&q=hello&sourceid=opera&ie=UTF-8&oe=UTF-8").search
console.log(url13);
/*Виведе в консоль 
?client=opera&q=hello&sourceid=opera&ie=UTF-8&oe=UTF-8
*/

//---searchParams Приклад 14
const url14 = new URL("https://www.google.com/search?client=opera&q=hello&sourceid=opera&ie=UTF-8&oe=UTF-8").searchParams
console.log(url14);
/*Виведе в консоль ? та те що після нього
URLSearchParams {
  'client' => 'opera',
  'q' => 'hello',
  'sourceid' => 'opera',
  'ie' => 'UTF-8',
  'oe' => 'UTF-8' }
*/

//---searchParams Приклад 15
const url15 = new URL("https://www.google.com/search?client=opera&q=hello&sourceid=opera&ie=UTF-8&oe=UTF-8").searchParams
console.log(url15.has("q"));
/*Виведе в консоль 
true
*/
console.log(url15.append("name", "google"));
/*Виведе в консоль 
undefined
*/
console.log(url15.get("name"));
/*Виведе в консоль
google
*/
url15.sort();
console.log(url15);
/*Виведе в консоль
URLSearchParams {
  'client' => 'opera',
  'ie' => 'UTF-8',
  'name' => 'google',
  'oe' => 'UTF-8',
  'q' => 'hello',
  'sourceid' => 'opera' }
*/

//---searchParams - append - href Приклад 16
const url16 = new URL("https://www.google.com/search");
url16.searchParams.append("q", "cat photo");
console.log(url16.href);
/*Виведе в консоль 
https://www.google.com/search?q=cat+photo
*/