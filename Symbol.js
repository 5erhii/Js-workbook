//СИМВОЛ
const phoneBook = {
    0: 1,
    olga: "+30670000001",
};

function addTophoneBook(phone, id) {
    const key = Symbol(id + phoneBook[0]);
    phoneBook[key] = phone;
    phoneBook[0]++;
}

addTophoneBook("+30670000001", "olga");
addTophoneBook("+30670000002", "olga");
console.log(phoneBook.olga1);//Виведе undefined
console.log(phoneBook["Symbol(olga)"]);//Виведе undefined
console.log(phoneBook);
/*Виведе {
    '0': 3,
    olga: '+30670000001',
    [Symbol(olga1)]: '+30670000001',
    [Symbol(olga2)]: '+30670000002'
  }
*/


//---//---//---//---//
const sym1 = Symbol("test");
const sym2 = Symbol("test");

console.log(sym1 === sym2);//Виведе false

//---//---//---//---//
const phoneBook = {
    0: 1,
    olga: "+30670000001",
};

function addTophoneBook(phone, id) {
    const key = Symbol(id + phoneBook[0]);
    phoneBook[key] = phone;
    return key;
}

const olga1 = addTophoneBook("+30670000001", "olga");
const olga2 = addTophoneBook("+30670000002", "olga");

console.log(phoneBook[olga1]);//Виведе +30670000001

//.description //---//---//
const phoneBook = {
    0: 1,
    olga: "+30670000001",
};

function addTophoneBook(phone, id) {
    const key = Symbol(id);
    phoneBook[key] = phone;
    return key;
}

const olga1Id = addTophoneBook("+30670000001", "olga@gmail.com");
const olga2Id = addTophoneBook("+30670000002", "olga@ukr.net");

console.log(olga1Id, description);//Виведе +30670000001 olga@gmail.com

//---//---//---//
const user = {
    name: "Olga",
    id: 335455,
    bookId: null,

    getPhone(book) {
        return book[this.bookId];
    }
}
const phoneBook = {
    0: 1,
    olga: "+30670000001",
};

function addTophoneBook(phone, user) {
    const key = Symbol(user.id);
    phoneBook[key] = phone;
    user.bookId = key;
}

addTophoneBook("+30670000001", user);

console.log(user.getPhone(phoneBook));//Виведе +30670000001

//Symbol.for() //---//---//
const a = Symbol("test");
const b = Symbol("test");

console.log(String(a) === String(b));//Виведе true

//---//---//
const a = Symbol("test");
const b = Symbol("test");

console.log(a.description === b.description);//Виведе true

//---//---//
const a = Symbol("test");
const b = Symbol("test");

console.log(a.toString() === b.toString());//Виведе true

//---//---//
const a = Symbol.for("test");
const b = Symbol.for("test");

console.log(a === b);//Виведе true

//---//---//---//
const user = {
    name: "Olga",
    id: 335455,
    bookId: null,

    getPhone(book) {
        return book[this.bookId];
    }
}
const phoneBook = {
    0: 1,
    olga: "+30670000001",
};

function addTophoneBook(phone, user) {
    const symId = Symbol(user.id);
    phoneBook[symId] = phone;
    user.bookId = symId;
}

addTophoneBook("+30670000001", user);

const symId = user.bookId;

console.log(Symbol.keyFor(symId));//Виведе 335455

//---//---//---//
const user = {
    name: "Olga",
    id: 335455,
    bookId: null,

    getPhone(book) {
        return book[this.bookId];
    }
}
const phoneBook = {
    me: "+30670000001",
    name: "Phone book"
};

function addTophoneBook(phone, user) {
    const symId = Symbol(user.id);
    phoneBook[symId] = phone;
    user.bookId = symId;
}

addTophoneBook("+30670000001", user);

const symId = user.bookId;

for (const key in phoneBook) {
    console.log(key);
}
//Виведе me name

//Symbol.iterator //---//---//---//---//
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;

        return this;
    },
    next() {
        return this.current <= this.to
            ? { done: false, value: this.current++ }
            : { done, true };
    }
};
for (let nun of range) {
    console.log(num);
}
//Виведе числа 1 2 3 4 5 

//---//---//
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;

        return this;
    },
    next() {
        return this.current <= this.to
            ? { done: false, value: this.current++ }
            : { done, true };
    }
};
const iterator = range[Symbol.iterator]();

do {
    console.log(result.value);
    result = iterator.next();
} while (!result.done);
//Виведе числа 1 2 3 4 5 6

//---//---//
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;

        return this;
    },
    next() {
        return this.current <= this.to
            ? { done: false, value: this.current++ }
            : { done, true };
    }
};

const arr = [1, 2, 3, 4, 5];
const iterator = arr[Symbol.iterator]();
result = iterator.next();

do {
    result = iterator.next();
    console.log(result.value);
} while (!result.done);
//Виведе числа 1 2 3 4 5 
