let arr;

arr = [123, 234, 345, -123, 0, true];
console.log(arr);

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.length);

arr[0] = "new value";
console.log(arr);
arr[6] = "okten";
console.log(arr);
arr[arr.length] = 54324123;
console.log(arr);
arr[arr.length] = "qerrasrwe";
console.log(arr);