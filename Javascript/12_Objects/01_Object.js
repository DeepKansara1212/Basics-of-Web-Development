const Person = {
    fName: "John",
    lName: "Doe",
    age: 23,

    // Method
    fullName: function() {
        console.log(`${this.fName} ${this.lName}`);
    }
}

console.log(Person.fName);
console.log(Person);

// console.log(Person[age]);

console.log(Person.fullName()); 
