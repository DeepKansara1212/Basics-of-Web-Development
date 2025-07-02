
// Object Constructor Function
function Person(fname, lname, age) {
    this.firstName = fname,
    this.lastName = lname,
    this.age = age,
    this.country = "India"
}


const Father = new Person("John", "Doe", 23)
const Mother = new Person("Alice", "Doe", 12) 
// const Brother = new Person("", "", 45)

// console.log(Father.country); 

Father.birthDate = "02-03-1995"

// console.log(Mother.birthDate);
// console.log(Father);
// console.log(Mother);

Person.prototype.birthDate = "02-03-1995"
// console.log(Mother.birthDate);
