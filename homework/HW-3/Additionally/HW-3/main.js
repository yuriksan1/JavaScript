// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let arr of arr1) {
    console.log(arr);
}
console.log(' ');
//     #GamKju89ob
//
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let string1 = ['a', 'b', 'c', 'qwe', 'wer', 'wss', 'hi', 'hello', 'okten', 'Yura'];
for (let string of string1) {
    console.log(string);
}
console.log(' ');
//     #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr2 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'qwe', false];
for (let arr of arr2) {
    console.log(arr);
}
console.log(' ');
//     #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arr3 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'qwe', false];
for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'boolean') {
        console.log(arr3[i]);
    }
}
console.log(' ');
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr4 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'qwe', false];
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number') {
        console.log(arr4[i]);
    }
}
//
// #mK4pmM4
//
console.log(' ');
// – Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
let arr5 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'qwe', false];
for (let i = 0; i < arr5.length; i++) {
    if (typeof arr5[i] === 'string'){
        console.log(arr5[i]);
    }
}