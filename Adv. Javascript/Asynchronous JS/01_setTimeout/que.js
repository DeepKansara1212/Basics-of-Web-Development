console.log(0);
console.log(1);

setTimeout(() => {
    console.log(2);
}, 4000);

console.log(3);

setTimeout(() => {
    console.log(4);
}, 2000);

console.log(5);
console.log(6);
console.log(7);



// 0 1 2 3 5 6 7 4

// 0 1 2 3 4 5 6 7