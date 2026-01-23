// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через
// звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = -10;
arr[4] = 3.14;
arr[5] = 'Hello';
arr[6] = 'World';
arr[7] = 'Hi Yura';
arr[8] = true;
arr[9] = false;
for (let a of arr) {
    console.log(a);
}
console.log(' ');
//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10; i++) {
    console.log(`Крок № ${i}`);
    document.write(`Крок № ${i} <br>`);
}
console.log(' ');
// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер
// кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(`Крок № ${i}`);
    document.write(`Крок № ${i} <br>`);
}
//
// #s24slNyz7
console.log(' ');

// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку
// через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(`Крок № ${i}`);
    document.write(`Крок № ${i} <br>`)
}
console.log(' ');
// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через
// console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`Крок № ${i}`);
        document.write(`Крок № ${i} <br>`)
    }
}
console.log(' ');
//
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(`Крок № ${i}`);
        document.write(`Крок № ${i} <br>`)
    }
}