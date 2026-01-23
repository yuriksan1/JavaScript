let users = [
    {skills: ["html", "mysql", "mongo"], id: 1, name: "Yura", age: 32, status: true},
    {skills: ["html", "mysql", "js"], id: 2, name: "Oleg", age: 22, status: false},
    {skills: ["html", "mysql", "java"], id: 3, name: "Vasya", age: 11, status: true},
    {skills: ["html", "mysql", "mysql"], id: 3, name: "Ivan", age: 6, status: false}
];
console.log(users);

let user0 = users[0];
console.log(user0.name);
console.log(user0.age);
console.log(user0["age"]);

console.log(users[0].skills[2]);
console.log(users[0]["skills"][1]);
console.log(users[0]["skills"][0]);

