//оперетор рівності динамічної типізції.число можна заисати рядком "10"
//може порівнювати текст з текстом
//true стає 1, false стає 0
//null та undefined завжди рівні
//0 та -0 також рівні
const personAge = 10;
const dogAge = 5;

console.log(personAge == dogAge);

//оператор статичної типізації. строге порівняння
const personAge = 10;
const dogAge = 5;

console.log(personAge === dogAge);

//оператор нерівності динамічної типізації. перетворює дані
//якщо значення однакові false, якщо різні true
const personAge = 10;
const dogAge = 5;

console.log(personAge != dogAge);

//оператор нерівності статичної типізації. дані чітко вказані
//якщо значення однакові false, якщо різні true
const personAge = 10;
const dogAge = 5;

console.log(personAge !== dogAge);

//оператор менше, не враховує тип даних як динамічна типізація
//якщо ріність справедлива то буде true
const personAge = 10;
const dogAge = 5;

console.log(personAge < dogAge);

//оператор більше, не враховує тип даних як динамічна типізація
//якщо ріність справедлива то буде true. наприклад значення "false" має значення
const personAge = 10;
const dogAge = 5;

console.log(personAge > dogAge);

//оператор менше або рівне, не враховує тип даних 
//якщо ріність справедлива то буде true
//дана рівність буде мати результат false
//Null стає 0, undefined стає NaN
//рядок з текстом є по замочуванню 1
const personAge = 10;
const dogAge = 5;

console.log(personAge <= dogAge);

//оператор ,більше або рівне, не враховує тип даних 
//якщо ріність справедлива то буде true
//дана рівність буде мати результат false
//Null стає 0, undefined стає NaN
//рядок з текстом є по замочуванню 1
const personAge = 10;
const dogAge = 5;

console.log(personAge >= dogAge);

