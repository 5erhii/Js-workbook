//---
const a = {
    test: 100,
};
console.log(a); //Виведе {test: 100} де test це ключ, а 100 значення
console.log(a.test); //Виведе 100

//---
const b = {
    ["text"]: "HelloWorld",
};
console.log(b.text); //Виведе HelloWorld

//---
const name = "key";
const c = {
    [name]: "HelloWorld", //Квадратні дужки дають змогу передавати в  якості ключа значення змінної
};
console.log(c[name]); //Виведе HelloWorld

//Ключове слово видалити
const g = {
    test: 100,
};
delete g.test
console.log(g);// Виведе лише {}

//---
const j = {
    test: 100,
    info: {
        name: "Ivan",
        age: 35,
    }
};
console.log(j.info.name);//Виведе Ivan

//---
const j = {
    test: 100,
    [key]: {
        [key]: "Ivan", //вкладена властивість може мати таке ж імя як і властивість
        age: 35,
    }
};
console.log(j[key][key]);//Виведе Ivan

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};
for (const key in person) {
    console.log(key);
} //Виведе  name age occupation address

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};
for (const key in person) {
    console.log(person[key]);
} //Виведе  Ivan 35 Program developer {city: "Kyiv", street: "Shevchenka street", houseNumber: 10}

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};
for (const key in person) {
    const item = person[key];
    if (typeof person[key] === "object") {
        for (const key2 in item) {
            console.log(item[key2]);
        }
    } else {
        console / log(item);
    }
}
//Виведе  Ivan 35 Program developer Kyiv Shevchenka street 10

//---
const k = { test: 1 };
const l = { test: 1 };

console.log(k === l);//Виведе false, оскільки JS не вважає ці обєкти однаковими.

//---
const h = { test: 1 };
const i = h;

console.log(h === i);//Виведе true, ці обєкти однаковими.

//---ДЕСТРУКТУРИЗАЦІЯ1
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};

const { age, name, address } = person;
console.log(age, name, address);
//Виведе  35 Ivan {city: "Kyiv", street: "Shevchenka street", houseNumber: 10}

//---ДЕСТРУКТУРИЗАЦІЯ2
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};

const { age, name, address { city, street }} = person;
console.log(age, name, city, street);
//Виведе  35 Ivan Kyiv Shevchenka street

//---ДЕСТРУКТУРИЗАЦІЯ3
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};

const { age, name, address { city, street }, ...rest} = person;
console.log(age, name, city, street);
console.log(rest);
//Виведе  35 Ivan Kyiv Shevchenka street
//Виведе {occupation: "Program developer"}

//---ДЕСТРУКТУРИЗАЦІЯ4
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};

const { age, name, address { city, street, zipcode = 41023 }} = person; //можна задати значення по замовчуванню zipcode
console.log(age, name, city, street);
//Виведе  35 Ivan Kyiv Shevchenka street 41023

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
};
function getAddress({ address: { city, street, houseNumber } }) {
    return `Your address: ${city} ${street} ${houseNumber}`;
}
const test = getAddress(person);
console.log(test);//Виведе  Ваша адреса: Kyiv Shevchenka street 10

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        street: "Shevchenka street",
        houseNumber: 10
    }
};
function getAddress({ address: { city, street, houseNumber } }) {
    return `Your address: ${city} ${street} ${houseNumber}`;
}
const test = getAddress({ address({ address: street: "Hello", city: "Kyiv"}) });
console.log(test);//Виведе  Ваша адреса: Kyiv Hello underfined

//---
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
};
function getAddress({ address }) {
    if (address) {
        const {
            city,
            street = "Не вказано",
            houseNumber,
            zipcode = 1000,
        } = address;
        return `Your address: ${city} ${street} ${houseNumber} ${zipcode}`;
    }
    return `Нема даних`;
}
const test = getAddress({ city: "Kyiv" });
console.log(test);//Виведе Нема даних

//---Додаємо додаткові властивості
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    ...role, //додали додаткову властивість, аюо info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
};
console.log(person);
//Виведе name: 'Ivan', age: 35, occupation: 'Program developer', value: 'admin', status:3, address: {city: Kyiv, houseNumber: 10}


//---Оператор in
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
};
console.log(!!person.name); //Наявність властивості "name" виведе true
//або
console.log("name" in person);//Виведе true

//---Додаємо функцію
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
    getAddress: function () {
        return "Client address";
    },
};
console.log(person.getAddress());//Виведе Client address"

//--- Ключове слово this
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
    getAddress: function () {
        return person.address;
    },
};
console.log(person.getAddress());//Виведе {city: "Kyiv", houseNumber: 10}

//--- Ключове слово this
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
    getAddress: function () {
        return person.address;
    },
};

const person2 = person;

console.log(person2.getAddress());//Виведе {city: "Kyiv", houseNumber: 10}

//--- Ключове слово this
const role = {
    value: "admin",
    status: 3,
};
const person = {
    name: "Ivan",
    age: 35,
    occupation: "Program developer",
    info: role
    address: {
        city: "Kyiv",
        //street: "Shevchenka street",
        houseNumber: 10
    }
    getAddress: function () { //Не працює з стрілковою функцією
        return this.address;
    },
};

console.log(person.getAddress());//Виведе {city: "Kyiv", houseNumber: 10}

//Літерал
Number.prototype.toOwnString = function () {
    console.log(this);

    return "Число: ${this}";
};
const f = 1;
const s = f.toOwnString();
console.log(s); //виведе [Number: 1] Число: 1

//---
function Test() {
    this.world = 'World';
    return "Hello" + this.world;
}
console.log(Test());//Виведе Helloworld

//---
function Test() {
    this.world = 'World';
    return "Hello" + this.world;
}
Test.hello = "Hello";
console.log(Test.hello);//Виведе Hello