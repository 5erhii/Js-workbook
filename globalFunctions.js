//EVAL приклад код в аргумент
const code = "(5+5)%5===0";

console.log(eval(code)); //результат true

//isFinite перевірка на скінченність
//приклад1
function calcScreenRation(w, h) {
    return w / h;
}

console.log(calcScreenRation(1920, 1080)); //результат 1.7777777777777777
//приклад2
function calcScreenRation(w, h) {
    return w / h;
}

console.log(calcScreenRation(1920, 0)); //результат infinity

//приклад3
function calcScreenRation(w, h) {
    let result = w / h;

    return isFinite(result) ? result : null;
}

console.log(calcScreenRation(1920, "12f3")); //результат null

//перевірка на не число
function calcScreenRation(w, h) {
    let result = w / h;

    if (isNaN(result)) {
        return "Error";
    } else if (!isFinite(result)) {
        return "is Infinity";
    } else {
        return result;
    }
}

console.log(calcScreenRation(1920, "12f3"));

//parseInt перетворює аргумент в ціле число
//приклад1
const num = parseInt('20px');

console.log(num); //результат буде 20

//приклад2
function calcScreenRation(w, h) {
    w = parseInt(w);
    h = parseInt(h);

    let result = w / h;

    if (isNaN(result)) {
        return "Error";
    } else if (!isFinite(result)) {
        return "is Infinity";
    } else {
        return result;
    }
}

console.log(calcScreenRation("1920px", "1080px")); //результат буде 1.92

//ParseInt перетворення числа на десяткове
const num = parseFloat("1.5555");

console.log(num);

//encodeURI

const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    const link = `https://${domain}/${path}`;
    //робимо перехід на сторінку
    console.log(link);
}
redirectToPath("/product/35367/info");
//результат https://it-brains.com.ua//product/35367/info

const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    const link = `https://${domain}/${path}`;
    //робимо перехід на сторінку
    console.log(link);
}
redirectToPath("/product/Мікрофон рожевий/info");
//результат https://it-brains.com.ua//product/Мікрофон рожевий/info
//посилання буде розірвано
//для того щоб його не рвало потрібно вказувати encodeURI
const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    const link = encodeURI(`https://${domain}/${path}`);
    //робимо перехід на сторінку
    console.log(link);
}
redirectToPath("/product/Мікрофон рожевий/info");

//encodeURIComponent
const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    path = encodeURIComponent(path);

    const link = `https://${domain}/${path}`;
    //робимо перехід на сторінку
    console.log(link);
}
redirectToPath("/product/Мікрофон рожевий/info");

//
const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    const link = encodeURI(`https://${domain}/${path}`);
    //робимо перехід на сторінку
    console.log(link);
}
const URI = "https://it-brains.com.ua/product/%D0%9C%D1%620095629";

function getUrl(urlIntURI) {
    urlINURI = decodeURI(urlInURI);
    console.log(urlInURI);
}

redirectToPath("/product/Мікрофон рожевий/info");

getUrl(URI); //в результаті отримаємо  https://it-brains.com.ua//product/Мікрофон рожевий/info

//перевірка
const domaon = 'it-brains.com.ua';

function redirectToPath(path) {
    const link = encodeURI(`https://${domain}/${path}`);
    //робимо перехід на сторінку
    console.log(link);

    return link;
}
const URI = "https://it-brains.com.ua/product/%D0%9C%D1%620095629";

function getUrl(urlIntURI) {
    urlINURI = decodeURI(urlInURI); //або urlINURI = decodeURIComponent(urlInURI); 
    console.log(urlInURI);

    return urlInURI;
}
const path = "product/Мікрофон рожевий/info";
const linnk = `https://${domain}/${path}`;

const link1 = redirectToPath(path); //URI

const link2 = getUrl(link1); // Decode URI

console.log(link === link2);
//результат буде true