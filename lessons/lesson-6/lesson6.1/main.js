let str = 'hello Yura';
console.log(str);
// console.log(str[0]);
// for (let s of str) {
//     console.log(s);
// }
let s = str.concat('!!!');// з'єднує значення
console.log(s);
console.log(str.toUpperCase());// до верхнбого регістру
console.log(str.toLowerCase());//до нижнього регістру
console.log(str.startsWith('hel'));//чи починається строка з певного підрядка.
console.log(str.endsWith('ra'));//чи закінчується строка певним підрядком.
console.log(str.substring(0, 7));//це метод рядка, який повертає частину тексту між двома індексами.
console.log(str.indexOf('e'));//це метод рядка (і масиву), який знаходить позицію першого входження підрядка або
// елемента.
console.log(str.lastIndexOf('l'));//це метод рядка або масиву, який шукає останнє входження елемента і повертає його індекс.
console.log(str.indexOf('l', 3));//це метод рядка (і масиву), який знаходить позицію першого входження підрядка або
// елемента - буде почнати з 3 індексу.
console.log(str.charAt(4));//це метод рядка, який повертає символ за вказаним індексом.
console.log(str.replace('l', '%'));//це метод рядка, який замінює частину тексту на інший і повертає новий рядок.
console.log(str.replaceAll('l', '$'));//міняє всі одинакові літери.
let split = str.split(' ');//це метод рядка, який розбиває рядок на масив за вказаним роздільником.
console.log(split);






