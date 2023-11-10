//УМОВНІ РОЗГАЛУЖЕННЯ
//Тернарний оператор

const productName = "Microphone";
const productDefault = "Goods name";

const newProductName = "Microphone 3000";
const userRole = "user";

const updateProductName = (userRole === "admin" && newProductName) || productName;
//якщо юзер адмін, то значення мукрофон3000, якщо ні то мікрофон

console.log(updateProductName);

// або вивести дві відповіді одночасно

const updateProductName = user2Role === "admin" ? console.log("isAdmin") || newProductName : console.log("noAdmin") || productName;
console.log(updateProductName);

//КЛЮЧОВІ СЛОВА.IF
//Приклад1
const CUSTOM_NAME = 'My robot';
const MODE = 2;
const ROOM = 'Вітальня';

const COMAND = 'work';

if (COMAND === "change name" && MODE !=== 0) {
    const name = CUSTOM_NAME || "Robot v134t1";
    console.log('Start ${name}');
}

if (MODE === 0) {
    console.log('Robot is offline');
}

if (COMAND === "work") {
    const room = ROOM;
    const mode = MODE;

    console.log('Mode: ${mode}; Прибирпю кімнату: ${road}');
}

//Приклад2
const login = 'user';
const password = '123qwe12331'
const isAdmin = true;
const isLoggedIn = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Переходимо на сторінку /admin");
    }
    if (!isAdmin) {
        console.log("Переходимо на сторінку /home");
    }
}

if (!isLoggedIn) {
    if (login && password) {
        console.log("Token:", 123456789123456789);

        if (isAdmin) {
            console.log("Переходимо на сторінку /admin");
        }

        if (!isAdmin) {
            console.log("Переходимо на сторінку /home");
        }
    }
}

//КЛЮЧОВІ СЛОВА.ELSE
//Приклад1
const login = 'user';
const password = '123qwe12331'
const isAdmin = true;
const isLoggedIn = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Переходимо на сторінку /admin");
    } else {
        console.log("Переходимо на сторінку /home");
    }
} else {
    if (login && password) {
        console.log("Token:", 123456789123456789);

        if (isAdmin) {
            console.log("Переходимо на сторінку /admin");
        } else {
            console.log("Переходимо на сторінку /home");
        }
    }
}

//Приклад2

if (isLoggedIn === true) {
    if (isAdmin) {
        console.log("Переходимо на сторінку /admin");
    } else if (login === "demo") {
        console.log("Переходимо на сторінку /demo");
    }
    else {
        console.log("Переходимо на сторінку /home");
    }
} else if (isLoggedIn === false) {
    if (login && password) {
        console.log("Token:", 123456789123456789);

        if (isAdmin) {
            console.log("Переходимо на сторінку /admin")
        } else {
            console.log("Переходимо на сторінку /home");
        }
    } else if (isLoggedIn === null) { console.log("Error"); }
}

//Приклад3

const price = 100;
const useCashback = true;

let cashbackLevel = 4;
let totalPrice = null;
let cashbackAmount = null;


if (price < 100) {
    console.log("Кешбек система доступна для товарів з ціною від 100 грн");
    cashbackAmount = 0;
} else {
    if (cashbackLevel > 0) {
        cashbackAmount = price * (cashbackLevel * 0.01);
    }

    cashbackLevel++;

    if (cashbackLevel > 5) {
        cashbackLevel = 1;
    }

    if (useCashback > 0 && useCashback) {
        totalPrice = price - cashbackAmount;
    }
}

console.log(totalPrice);


//ВИБІР КЕЙСІВ SWITCH CASE та BREAK
//стандартний запис
const buttonType = "primary";

if (buttonType === "primary") {
    console.log("primary button");
} else if (buttonType === "secondary") {
    console.log("secondary button");
} else if (buttonType === "basic") {
    console.log("basic button");
} else {
    console.log("default button");
}

//запис SWITCH
const buttonType = "primary",
    buttonColor = "red";

switch (buttonType) {
    case "main":
    case "global":
    case "primary":
        console.log("primary");
        break;

    case "second":
    case "double":
    case "secondary":
        console.log("secondary");
        break;

    default:
        console.log("default button");
}




