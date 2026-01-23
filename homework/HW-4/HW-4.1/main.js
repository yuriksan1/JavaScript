// function foobar(a, b) {
//     return a + b;
// }
//
// let foo = foobar(1, 2);
// console.log(foo);
// // #I2XsG6f
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// // function foobar2(a, b) {
// //     return a * b;
// // }
// //
// // let foo2 = foobar2(2, 3);
// // console.log(foo2);
//
// //or
//
// function square(aNum, bNum) {
//     const result = aNum * bNum;
//     console.log(result);
//     return result;
// }
//
// square(3, 4);
//
// // #ETGAxbEn8l
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// // function foobar3(r) {
// //     return 3.14 * r**2;
// // }
// // let foo3 = foobar3(3);
// // console.log(foo3);
//
// //or
// function roundSquare(radius) {
//     return Math.PI * radius * radius;
// }
//
// console.log(roundSquare(3));
//
// // #Mbiz5K4yFe7
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// // function foobar4(h, r) {
// //     return 2 * Math.PI * h * r;
// // }
// //
// // console.log(foobar4(4, 5));
//
// //or
//
// function squareCilinder(radius, height) {
//     return 2 * Math.PI * radius * height;
// }
//
// console.log(squareCilinder(6, 7));
//
// // #SIdMd0hQ
// // - створити функцію яка приймає масив та виводить кожен його елемент
// function foobar5(array) {
//     for (let item of array) {
//         console.log(item);
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// foobar5(users);
// // #59g0IsA
// // - створити функцію яка створює параграф з текстом та виводить його через document.write.
// // Текст задати через аргумент
// // function foobar6(text) {
// // document.write(`<p>${text}</p>`);
// // }
// // foobar6('Hello World!');
//
// // #hOL6126
// // - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// // Текст li задати через аргумент всім однаковий
// function ulWithLi(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`);
// }
//
// ulWithLi('Rabbit');
//
// // #0Kxco1edSN
// // - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить
// // його через document.write
// function ulWithLi2(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text} ${i}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// ulWithLi2('Yura', 10);
//
// // #gEFoxMMO
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// // та будує для них список (ul li) та виводить його через document.write.
// function foobar7(array) {
//     document.write(`<ul>`);
//     for (let a of array) {
//         document.write(`<li>${a}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// foobar7([1, 3.14, -211, 'hello', 'people', true, false, 0]);
// // #bovDJDTIjt
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// // та виводить їх в документ. Для кожного об'єкту окремий блок.
// function foobar8(array) {
//     for (let item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }
//
// foobar8([
//     {id: 1, name: 'John', age: 3},
//     {id: 2, name: 'Yura', age: 4},
//     {id: 3, name: 'Petya', age: 5},
//     {id: 4, name: 'Ivan', age: 6},
//     {id: 5, name: 'Oleg', age: 7}
// ])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([3, 333, -20, 3.14, 100500]));
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// function sum(arr) {
//     let total = 0;
//     for (let item of arr) {
//         total = total + item;
//     }
//     return total;
// }
//
// console.log(sum([1, 2, 10]));

//or

function sum(arr) {
    let total = 0;
    for (let item of arr) {
        total = total + item;
    }
    return total;
}

console.log(sum([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, i1, i2) {
    let x = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = x;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));