// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world';
console.log(s1.length);
let s2 = 'lorem ipsum';
console.log(s2.length);
let s3 = 'javascript is cool';
console.log(s3.length);

let arr = [s1, s2, s3];
for (let item of arr) {
    console.log(item.length);
}
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s4 = 'hello world';
console.log(s4.toUpperCase());
let s5 = 'lorem ipsum';
console.log(s5.toUpperCase());
let s6 = 'javascript is cool';
console.log(s6.toUpperCase());

let s7 = '!!!javascript is cool';
let string = s7.toUpperCase();
console.log(string);
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let s8 = 'HELLO WORLD';
console.log(s8.toLowerCase());
let s9 = 'LOREM IPSUM';
console.log(s9.toLowerCase());
let s10 = 'JAVASCRIPT IS COOL';
console.log(s10.toLowerCase());

let s11 = '!!!JAVASCRIPT IS COOL';
let string2 = s11.toLowerCase();
console.log(string2);
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToarray(str) {
    return str.split(' ');
}

let str = 'Ревуть воли як ясла повні';
let arr2 = stringToarray(str);
console.log(arr2);
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти
// в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let foo = array.map(value => {
    return value + "";
});
console.log(foo);
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortNums(array, direction) {
    if (direction === 'ascending') {
        console.log(array.sort((a, b) => a - b));
    }
    if (direction === 'descending') {
        console.log(array.sort((a, b) => b - a));
    }
}

sortNums(nums, 'ascending') // [3,11,21] зростання
sortNums(nums, 'descending') // [21,11,3] спадний
// ==========================
// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // -- відсортувати його за спаданням за monthDuration
// let num1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(num1);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let num2 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(num2);
// // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let num3 = coursesAndDurationArray.map((value, index) => {
//     return {
//         id: index + 1,
//         title: value.title,
//         monthDuration: value.monthDuration
//     }
// });
// console.log(num3);
let num4 = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    })

console.log(num4);
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values2 = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// let deck = [];
// for (let s of suits) {
//     for(let v of values2) {
//             const card = {suite:s,values2:v};
//             if(s === 'heart' || s === 'diamond'){
//                 card.color = 'red';
//             }else{
//                 card.color = 'black';
//             }
//             deck.push(card);
//     }
// }
// console.log(deck);
//
// // - знайти піковий туз
// console.log(deck.find(d => d.values2 === 'ace' && d.suite === 'spade'));
// // - всі шістки
// console.log(deck.filter(d => d.values2 === '6'));
// // - всі червоні карти
// console.log(deck.filter(d => d.color === 'red'));
// // - всі буби
// console.log(deck.filter(d => d.suite === 'diamond'));
// // - всі трефи від 9 та більше
// console.log(deck.filter(d => d.suite === 'club' && (d.values2 !=='6' && d.values2 !=='7' && d.values2 !=='8' && d.values2 !=='9')));
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king'
// //     color:'', // 'red','black'
// // }
// //
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
// console.log(cards);
let newArray = cards.reduce((previousValue, currentValue) => {
        if (currentValue.cardSuit === 'spade') {
            previousValue.spades.push(currentValue);
        } else if (currentValue.cardSuit === 'diamond') {
            previousValue.diamonds.push(currentValue)
        } else if (currentValue.cardSuit === 'heart') {
            previousValue.hearts.push(currentValue)
        } else if (currentValue.cardSuit === 'club') {
            previousValue.clubs.push(currentValue);
        }
        return previousValue;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    });

console.log(newArray);

// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.filter(value => value.modules.includes('sass')));
// console.log(coursesArray.filter(value => value.modules.includes('docker')));
// // --написати пошук всіх об'єктів, в яких в modules є sass
// // --написати пошук всіх об'єктів, в яких в modules є docker