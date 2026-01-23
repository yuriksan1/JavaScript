// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
let s1 = "hello";
console.log(s1);
let s2 = "owu";
console.log(s2);
let s3 = "com";
console.log(s3);
let s4 = "ua";
console.log(s4);

let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
console.log(n3);
let n4 = 123;
console.log(n4);
let n5 = 3.14;
console.log(n5);
let n6 = 2.7;
console.log(n6);
let n7 = 16;
console.log(n7);

let b1 = true;
console.log(b1);
let b2 = false;
console.log(b2);
//
//     Вивести кожну змінну за допомогою: console.log
// -----------------------------------------------------------------------
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
let firstName = "Komov ";
let middleName = " Yurii ";
let lastName = " Oleksandrovich";
console.log(firstName + middleName + lastName);
// ---------------------------------------------------------------------------
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
let a = 100;
let b = "100";
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// -----------------------------------------------------------------------------
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям,
// По-батькові та роками. Та вивести в консоль
let firstName1 = prompt("Ведіть ваше ім'я");
let middleName2 = prompt("Ведіть вашу фамілію");
let years = prompt("Ведіть ваш вік");
console.log(firstName1 + " " + middleName2 + " " + years);
