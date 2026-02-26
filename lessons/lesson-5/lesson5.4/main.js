// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }
// let foo = asd();
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }

}

let builder = userBuilder('Yura', 26);
console.log(builder);

console.log(builder.getName());
console.log(builder.getAge());

builder.setAge(999);
console.log(builder.getAge());