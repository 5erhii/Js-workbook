///---///---/// Object.assign
const article1 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
articlePhoto1 = {
    photoUrl: "...url",
    photoId: 100,
    photoType: "big",
};
articleCommentList1 = {
    list: [{ id: 4323, user: "Ivan", message: "Coll content" }],
};

Object.assign(article1, articlePhoto1, articleCommentList1);

console.log(article1);
/*Виведе
{
  id: 105423,
  title: 'My article',
  description: 'This is info about article',
  categoryId: 1423,
  likeAmount: 442,
  photoUrl: '...url',
  photoId: 100,
  photoType: 'big',
  list: [ { id: 4323, user: 'Ivan', message: 'Coll content' } ]
}
*/

///---///---/// Object.entries
const article2 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
articlePhoto2 = {
    photoUrl: "...url",
    photoId: 100,
    photoType: "big",
};
articleCommentList2 = {
    list: [{ id: 4323, user: "Ivan", message: "Coll content" }],
};

Object.assign(article2, articlePhoto2, articleCommentList2);

console.log(Object.entries(article2));
/*Виведе масиви у вигляді ключ занчення
[
  [ 'id', 105423 ],
  [ 'title', 'My article' ],
  [ 'description', 'This is info about article' ],
  [ 'categoryId', 1423 ],
  [ 'likeAmount', 442 ],
  [ 'photoUrl', '...url' ],
  [ 'photoId', 100 ],
  [ 'photoType', 'big' ],
  [ 'list', [ [Object] ] ]
]
*/

///---///---/// Object.entries
const article3 = {
    info: {
        title: "My article",
        description: "This is info about article",
    },
    id: 105423,
    categoryId: 1423,
    likeAmount: 442,
};

const ARTICLE_FIELD = {
    title: "ID article",
    description: "Article header",
};

articlePhoto3 = {
    photoUrl: "...url",
    photoId: 100,
    photoType: "big",
};
articleCommentList3 = {
    list: [{ id: 4323, user: "Ivan", message: "Coll content" }],
};

Object.assign(article3, articlePhoto3, articleCommentList3);
const formList = Object.entries(article3.info);

const formListLayout = formList.map(([key, value]) => {
    return `${ARTICLE_FIELD[key]}:${value}`;
});

console.log(formListLayout);
/*Виведе масиви у вигляді ключ занчення
[
  'ID article:My article',
  'Article header:This is info about article'
]
*/

///---///---/// Object.fromEntries
const objArr = [
    ["id", 100432],
    ["title", "My product name"],
    ["price", 1203],
];
console.log(Object.fromEntries(objArr));
/*Виведе 
{ id: 100432, title: 'My product name', price: 1203 }
*/

///---///---/// hasOwnProperty
const article4 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
console.log(article4.hasOwnProperty("id"));
/*Виведе
true
*/

///---///---/// propertyIsEnumerable
const article5 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
console.log(article5.propertyIsEnumerable("id"));
/*Виведе
true
*/

///---///---/// Object.freeze
const article6 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.freeze(article6);

article6.title = "Hello";

console.log(article6);
/*Виведе все без змін
{
  id: 105423,
  title: 'My article',
  description: 'This is info about article',
  categoryId: 1423,
  likeAmount: 442
}
*/

///---///---/// Object.isFrozen
const article7 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.freeze(article7);

article7.title = "Hello";
console.log(Object.isFrozen(article7));
/*Виведе
true
*/

///---///---/// Object.preventExtensions
const article8 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.preventExtensions(article8);

article8.title = "Hello";
console.log(article8.title);
article8.test = "world";
console.log(article8.test);
/*Виведе
Hello
undefined
*/

///---///---/// Object.isExtensible
const article9 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.preventExtensions(article9);

console.log(Object.isExtensible(article9));
/*Виведе
false
*/

///---///---/// seal
const article10 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.seal(article10);

delete article10.id;

console.log(article10.id);
/*Виведе
105423
*/

///---///---/// isSealed
const article11 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.seal(article11);

delete article11.id;

console.log(Object.isSealed(article11));
/*Виведе
true
*/

///---///---/// Object.keys
const article12 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.seal(article12);

delete article12.id;

console.log(Object.keys(article12));
/*Виведе
[ 'id', 'title', 'description', 'categoryId', 'likeAmount' ]
*/

///---///---/// Object.values
const article13 = {
    id: 105423,
    title: "My article",
    description: "This is info about article",
    categoryId: 1423,
    likeAmount: 442,
};
Object.seal(article13);

delete article13.id;

console.log(Object.values(article13));
/*Виведе
[ 105423, 'My article', 'This is info about article', 1423, 442 ]
*/