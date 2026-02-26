let arr = [];
console.log(Array.isArray(arr));

arr[arr.length] = 100;//додає елемент
console.log(arr);

console.log(arr.push('new element1'));//додає елемент в кінець масиву
console.log(arr);

console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr.push('new element4'));
console.log(arr.push('new element5'));
console.log(arr);

console.log(arr.pop());// вирізає останній елемент з масиву,ось так виводить вирізаний еелемент.
console.log(arr);

console.log(arr.unshift('new'));// додає елемент на початок масиву
console.log(arr);

console.log(arr.shift());//видаляє з початку,ось так виводить вирізаний еелемент.
console.log(arr);

let join = arr.join(';');//це метод масиву, який об’єднує всі елементи в один рядок,в дужках роздільник,початкова
// кома і ми її можем змінювати.
console.log(join);

let nums = [11, 22, 33];

let concat = arr.concat(nums);//це метод масиву (і рядка), який об’єднує значення і повертає новий масив або рядок.
console.log(concat);
console.log(arr);//він залишився без змін

console.log(nums);
console.log(nums.reverse());

console.log(concat);
let slice = concat.slice(0, 4);//це метод, який повертає частину масиву або рядка, не змінюючи оригінал.
console.log(slice);
console.log(concat);

// let splice = concat.splice(0);//ми скопіювали масив
// console.log(splice);

// let splice2 = concat.splice(0, 2);//з 0 елеманта ми будемо видаляти 2 значення.
// console.log(splice2);
// console.log(concat);

// let splice3 = concat.splice(0, 2,'!!!','wert','$$$$$$');//з 0 елеманта ми будемо видаляти 2 значення і наповнювати
// // видалені значення наступними значеннями необмеженими (це якщо мають 3 і більше значень).
// console.log(splice3);
// console.log(concat);

// console.log(concat.splice(concat.indexOf(11), 1));//concat.indexOf(11) шукає під яким індексом буде елеиент і
// // видалить 1 елемент.

console.log(concat.includes(11));//це метод масиву або рядка, який перевіряє, чи міститься значення.
console.log('hello world!'.includes('wor'));















