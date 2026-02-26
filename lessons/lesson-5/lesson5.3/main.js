let user = {
    name: "John",
    age: 25,
    greeting: function (massage) {
        console.log(this);
        return `${massage} my name is ${this.name}`
    },
    vitanya: (massage) => `${massage} my age is ${user.age}`
}

console.log(user.greeting('Hello'));
console.log(user.vitanya('Hi'));