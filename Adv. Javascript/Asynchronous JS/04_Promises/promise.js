// Promise Created
// 1)
// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("First Promise resolved");
//         resolve();
//     }, 2000);
// });

// // Promise Consumption
// firstPromise.then(() => {
//     console.log("First Promise consumed");
// });

// 2)
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Second Promise resolved");
//         resolve();
//     }, 2000);
// }).then(() => {
//     console.log("Second Promise consumed");
// });

// 3) Promise with data
// const thirdPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log('User Detailes: ');
//         res({ name: 'John', age: 30 });
//     }, 1000);
// });

// thirdPromise.then((user) => {
//     console.log(user.name);
// });

// 4) Promise with error
// const fourthPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       res({ name: "John", age: 30 });
//     } else {
//       rej("Error: Something went wrong");
//     }
//   }, 1000);
// });

// fourthPromise
//   .then((user) => {
//     console.log(user);
//     return user.age;
//   })
//   .then((age) => {
//     console.log("Age received: ", age);
//     return age + 5;
//   })
//   .then((newAge) => {
//     console.log("New Age: ", newAge);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise is settled (either resolved or rejected)");
//   });


// 5)
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000) 
})

async function promiseFiveConsume() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

promiseFiveConsume()