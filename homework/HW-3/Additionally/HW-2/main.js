// – є масив [2,17,13,6,22,31,45,66,100,-18] :
let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i = 0;
// while (i < arrays.length) {
//     console.log(arrays[i]);
//     i++
// }
// console.log(' ');
// //     2. перебрати його циклом for
// for (let arr of arrays){
//     console.log(arr);
// }
// console.log(' ');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let x = 1;
// while (x < arrays.length) {
//     console.log(arrays[x]);
//     x += 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < arrays.length; i += 2) {
//     console.log(arrays[i]);
// }
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arrays.length) {
//     if (arrays[i] % 2 === 0) {
//         console.log(arrays[i]);
//     }
//     i++;
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = 0; i < arrays.length; i += 2) {
//     console.log(arrays[i]);
// }
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// for (let i = 0; i < arrays.length; i++) {
//     if (arrays[i] % 3 === 0) {
//         arrays[i] = 'okten';
//     }
//     console.log(arrays[i]);
// }
// 8. вивести масив у зворотньому порядку.
// for (let i = arrays.length - 1; i >= 0; i--) {
//     console.log(arrays[i]);
// }
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// 1. перебрати його циклом while
// let i = arrays.length -1;
// while (i >= 0) {
//     console.log(arrays[i]);
//     i--
// }
// 2. перебрати його циклом for
// for (let i = arrays.length - 1; i >= 0; i--) {
//     console.log(arrays[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let x = arrays.length -1;
// while (x >= 1) {
//     console.log(arrays[x]);
//     x -= 2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arrays.length - 1; i >= 1; i -= 2) {
//     console.log(arrays[i]);
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arrays.length -1;
// while (i >= 0) {
//     if (arrays[i] % 2 === 0) {
//         console.log(arrays[i]);
//     }
//     i--;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = arrays.length - 1; i >= 0; i--) {
//     if (arrays[i] % 2 === 0) {
//         console.log(arrays[i]);
//     }
// }
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// for (let i = arrays.length - 1; i >= 0; i--) {
//     if (arrays[i] % 3 === 0) {
//         arrays[i] = 'okten';
//     }
//     console.log(arrays[i]);
// }
