const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const arr1 = [1, 2, 3]
const arr2 = [4, 5]

let result = arr1.concat(arr2)
// console.log(result);


// let slice_arr = numbers.slice(0, 5)
let slice_arr = numbers.slice(-5)
// console.log(slice_arr);


// console.log(numbers.at(5));

console.log(numbers.join(" $ "));

// console.log(numbers.pop()); 

// console.log(numbers.shift());

// console.log(numbers.push(100));
// console.log(numbers.unshift(25));


// console.log(numbers);



const fruits = ["Banana", "Orange", "Apple", "Mango"];

let splice_arr = fruits.splice(1, 2, "Kiwi") 
console.log(splice_arr);

console.log(fruits);

