const func1 = () => {
    console.log("Hello World");
}

// setTimeout(func1, 2000);

// setTimeout(callback function, time Periode, param1, ...)


const details = setTimeout((name, age) => {
    console.log(`Hi! My name is ${name} & I am ${age} years old.`);
}, 3000, "Deep", 23);

clearTimeout(details);


const timeout = setTimeout(() => {
    console.log("Data Received");
}, 5000);


clearTimeout(timeout)