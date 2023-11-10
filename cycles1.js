//ЦИКЛИ приклад1
let count = 0;
let isFast = true;

while (count < 5) {
    console.log("Hello word!", count);
    if (isFast && count >= 3) {
        count = 5;
    } else {
        count++;
    }
}
//приклад2
//покупка товару і знижка
const PRODUCT_AMOUNT = 6;
const DISCOUNT_ADDITIONAL = 2;


let discountAmount = 0;
let productCount = 0;

while (productCount < PRODUCT_AMOUNT && DISCOUNT_ADDITIONAL <= 10 && discountAmount <= 10) {
    productCount++;

    if (productCount <= 0) {
        break;
    }
    if (productCount <= 3) {
        discountAmount += 1;
    } else if (productCount > 3 && productCount <= 5) {
        discountAmount += 1.5;
    } else if (productCount > 5 && productCount <= 8) {
        discountAmount += 2;
    } else if (productCount > 8) {
        discountAmount += 2.5;
    }
    if (DISCOUNT_ADDITIONAL) {
        discountAmount += DISCOUNT_ADDITIONAL;
    }

    console.log(productCount, discountAmount);

    if (discountAmount > 10) {
        discountAmount = 10;
    }
}

console.log("Знижка:", discountAmount, "%");
console.log("Знижка для товарів:", productCount);
console.log("Товарів не мають знижки:", PRODUCT_AMOUNT - productCount);

//приклад3

let container = 5;
let storage = 20;

let car = 3;

do {
    car++;

    storage -= container;
    console / log(car, storage);
} while (car < 3);

if (car > 3) {
    console.log("We need new car");
}

//CONTINUE велотренажер
let start = 0;
let goal = 100;

let step = 0;
let set = 8;
let rest = 10;

do {
    if (step === 0) {
        console.log("Start training");
    }

    start++;
    step++;

    if (step === goal || start === goal) {
        console.log("End training");
        break;
    }
    if (step % rest === 0) {
        console.log("Take a rest");
        continue;
    }
    if (step % set === 0) {
        console.log("You make ${staep / set} set(s)");
    }
    if (step === goal / 2) {
        console.log("You make half of training");
    }

    console.log("Current progress", step);
} while (step < goal %% start < goal);

//FOR 
//приклад1
for (let i = 1, j = 5; i <= j; i++) {
    console.log("Test", i, j);
}

//приклад2
let q = 0;

for (let i = 1, j = 5; i <= j; i++) {
    console.log("Test", i, j);

    if (i === 3) {
        j++;
    }

    for (; q < i; q++) {
        console.log("Q", q);
    }
}

//приклад3
let q = 0;

for (let i = 0, j = 5; i <= j; i++) {
    console.log("Test", i, j);

    if (i === 3) {
        j++;
    }

    for (; ; q++) {
        console.log("Q", q);

        if (q >= i) {
            break;
        }
    }
}

//МІТКА приклад1
let q = 0;

main: for (let i = 0, j = 5; i <= j; i++) {
    console.log("Test", i, j);

    if (i === 3) {
        j++;
    }

    for (; ;) {
        console.log("Q", q);

        if (q >= i) {
            break main;
        }
        q++;
    }
}
// приклад2
let age = 25;
let hasExp = true;
let hasEdu = false;

let JS = true;
let HTML = true;

let result = null;

form: {
    if (age >= 18) {
        if (hasExp) {
            console.log("You fit");
            rest = true;

            if (result === null && JS) {
                console.log("You fit");
            }

            if (result === null && HTML) {
                console.log("You fit");
            }
        }
        if (result === null && hasEdu) {
            console.log("You fit");
            result = false;
        }
    }

    if (age < 18) {
        console.log("You dont fit. Small age")
        result = false;
    }
}

// приклад3 форма працевлаштування
let age = 25;
let hasExp = true;
let hasEdu = false;

let JS = true;
let HTML = true;


form: {
    if (age >= 18) {
        if (hasExp) {
            console.log("You fit");
            break form;

            if (JS) {
                console.log("You fit");
            }

            if (HTML) {
                console.log("You fit");
            }
        }
        if (hasEdu) {
            console.log("You fit");
            break form;
        }
    }

    if (age < 18) {
        console.log("You dont fit. Small age")
        break form;
    }
}

//приклад4 табличка множення
tabe: for (let i = 1; i < 10; i++) {
    if (i === 1) {
        constinue;
    }
    console.log(' Число ${i} ==================');
    for (let j = 1; j < 10; j++) {
        if (j === 1) {
            constinue;
        }

        console.log('${i} * ${j} = ${i * j}');

    }
}
