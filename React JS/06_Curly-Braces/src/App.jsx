import React from "react";
import "./App.css";

const App = () => {
  let name = "john";

  let a = 20;
  let b = 10;

  let isLogin = false;

  // if(isLogin) {
  //   console.log("Loggin");
  // } else {
  //   console.log("Not loggin");
  // }

  // isLogin ? console.log("Loggin") : console.log("Not loggin");

  function add(a, b) {
    return a + b;
  }

  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else if (op == "*") {
      return a * b;
    } else {
      return "Enter a valid oeprator";
    }
  }

  const arr = [45, 18, 7, 12];

  const obj = {
    10: "Apple",
    20: "Mango",
    30: "Kiwi",
    name: "djffn",
  };

  const image_path = "https://images.unsplash.com/photo-1761839257789-20147513121a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169";
  const alt_text = "Playground";

  return (
    <>
      {/* Variables */}
      <h1>Hello World</h1>
      <h2>My name is {name}</h2>

      <h2>Sum: {a + b}</h2>

      {/* Condition */}
      <h1>{isLogin ? <p>Login</p> : <p>Not Login</p>}</h1>
      <h1>{isLogin && <p>True Login</p>}</h1>

      {/* Function */}
      <h1>{add(10, 54)}</h1>
      <h1>{operation(10, 45, "/")}</h1>

      {/* Object & Array */}
      <h1>{arr[1]}</h1>
      <h1>{obj.name}</h1>

      <img src={image_path} alt={alt_text} />
    </>
  );
};

export default App;
