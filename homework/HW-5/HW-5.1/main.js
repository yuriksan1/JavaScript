// // #I2XsG6f
// //
// // – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б
// function foo(a, b) {
//     return a * b;
// }
//
// console.log(foo(2, 5));
//
// //Стрілочна
//
// let foo2 = (a, b) => a * b;
// console.log(foo2(3, 5));
//
// // #ETGAxbEn8l
// //
// // – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
// function foo3(r) {
//     return Math.PI * r * r;
// }
//
// console.log(foo3(5));
//
// //Стрілочна
//
// let foo4 = (r) => Math.PI * r * r;
// console.log(foo4(6));
//
// // #Mbiz5K4yFe7
// //
// // – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// function foo6(h, r) {
//     return 2 * Math.PI * h * r;
// }
//
// console.log(foo6(3, 4));
//
//
// let foo5 = (h, r) => 2 * Math.PI * h * r;
// console.log(foo5(2, 3));
//
// // #SIdMd0hQ
// //
// // – створити функцію, яка приймає масив та виводить кожен його елемент
// function foo7(array) {
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
// foo7(users);
//
//
// console.log('----------------------------------');
// //Стрілочна
// let foo8 = (arr) => {
//     for (let item of arr) {
//         console.log(item);
//     }
// }
// foo8(users);
//
// // #59g0IsA
// //
// // – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
// function foo9(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// foo9('hello');
//
// //Стрілочна
//
// let foo10 = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// foo10('Yura');
//
// // #hOL6126
// //
// // – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo11(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>
// `);
// }
//
// foo11('Hello world');
//
// //Стрілочна
//
// let foo12 = (text) => {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// foo12('Hi people');

// #0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foo13(text, x) {
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

foo13('Jeremy', 3);
//Стрілочна

let foo14 = (text, x) => {
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

foo14('Yura', 3);

// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
function foo15(arrays) {
    document.write(`<ul>`);
    for (let item of arrays) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

foo15([1, 2, 3, 'Hi', 'World', true, false]);
//Стрілочна

let foo16 = (arr) => {
    document.write(`<ul>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

foo16([1, 2, 3, 'Hi', 'World', true, false]);

// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.
let foo17 = (arr) => {
    for (let item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}
foo17([{id: 1, name: 'Yura', age: 23},
    {id: 2, name: 'Vasya', age: 27},
    {id: 3, name: 'Ivan', age: 33},]);

//Стрілочна

let foo18 = (arr) => {
    for (let item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}
foo18([{id: 1, name: 'Oleg', age: 44},
    {id: 2, name: 'Vasya', age: 55},
    {id: 3, name: 'Ivan', age: 33},]);

// #pghbnSB
//
// – створити функцію, яка повертає найменше число з масиву

function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([1, 3, 4, 555, -333, 777]));

//Стрілочна

let arrayMinValue2 = (array) => {
    let min = array[0];
    for (let number of array) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(arrayMinValue([11, 22, 34, -5, 3453]));

// #EKRNVPM

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13

function sum(arr) {
    let total = 0;
    for (let item of arr) {
        total = total + item;
    }
    return total;
}

console.log(sum([1, 2, 10])); //->13

//Стрілочна

let sum2 = (arr) => {
    let total = 0;
    for (let item of arr) {
        total = total + item;
    }
    return total;
}

console.log(sum2([1, 2, 10])); //->13

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1)); //=> [22,11,33,44]

//Стрілочна

let swap2 = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1)); //=> [22,11,33,44]

// #mkGDenYnNjn
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

//Стрілочна

let exchange2 = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange2(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));



