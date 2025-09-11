const info = setInterval(() => {
    console.log("Hello World");
}, 1000);


clearInterval(info); 


const interval = setInterval((i) => {
    console.log("Hello", i);
    i++;
    
}, 5000);

clearInterval(interval)