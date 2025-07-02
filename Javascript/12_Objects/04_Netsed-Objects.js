const Person = {
    name: "John",
    age: 23,
    Cars: {
        car_name: "BMW",
        car_price: 4500000
    }
}

// console.log(Person);
// console.log(Person.Cars.car_name);
// console.log(Person.age);


const Joke = {
    "statusCode": 200,
    "data": {
        "categories": ["Action", "Funny"],
        "id": 654,
        "content": "Chuck Norris is the best in the West. He also has the North, East and South totally covered."
    },
    "message": "Random joke fetched successfully",
    "success": true
}

// console.log(Joke.data.content);
console.log(Joke.data.categories[1]);




