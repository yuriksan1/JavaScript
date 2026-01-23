// let age = prompt("enter you name");
// if (age >= 18) {
//     console.log("watch your movie");
// }else {
//     console.log("ваш вік до 18 років");
// }

// let color = prompt('Please enter color');
//
// if (color === 'green') {
//     console.log('you can go');
// }else if (color === 'yellow') {
//     console.log('wait');
// }else if (color === 'red') {
//     console.log('stop');
// }else{
//     console.log('error');
// }

let color = prompt('enter color');
let isRoadClear = prompt('is-road-clear');

if (color === 'green'){
    if (isRoadClear === 'yes') {
        console.log('you can go');
    }else {
        console.log('wait pls');
    }
}else if (color === 'yellow'){
    console.log('wait');
}else if(color === 'red'){
    console.log('stop');
}else {
    console.log('????');
}
