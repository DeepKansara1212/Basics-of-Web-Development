import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [inputValue]);

  return (
    <>
      <h1>useRef Hook</h1>
      <p>
        The <code>useRef</code> Hook allows you to persist values between
        renders. It can be used to store a mutable value that does not cause a
        re-render when updated. It is often used to access DOM elements
        directly.
      </p>

      <input
        type="text"
        placeholder="Value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h1>Render Count: {count.current}</h1> 
    </>
  );
};

export default App;
