let a = 100;
let b = a;
b = b + 10; //110
console.log(b);
console.log(a);

let user = {name:'vasya'};
let user2 = user;
console.log(user2);
user2.age = 20;
console.log(user2);
console.log('---------------------------');
console.log(user);