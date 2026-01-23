let user = {
    id: 1,
    name: 'vasya'
};
console.log(user);

user.age = 32;
console.log(user);

user['status'] = true;
console.log(user);

delete user.id;
console.log(user);
