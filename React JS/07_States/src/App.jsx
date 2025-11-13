import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(10);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  return (
    <>
      <h1>States in React</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Click to increase</button>


      <h2>Count: {count}</h2>
    </>
  );
};

export default App;
