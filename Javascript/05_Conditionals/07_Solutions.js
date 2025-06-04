let year = 1600

if (((year % 4 === 0) && (year % 100 !== 0))  ||  (year % 400 === 0)) {
    console.log(year + " is Leap Year");
}

else {
    console.log("Not a Leap Year");
}