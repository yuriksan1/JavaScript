let user1 = {
    id: 1,
    name: "Yura",
    age: 26,
    skills: ["html", "js", "java"],
    wife : {
        name : "olya",
        age : 20
    }
}

console.log(user1);
console.log(user1.name);
console.log(user1["age"]);
console.log(user1.skills[2]);

console.log(user1.wife.name);
