import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const saveData = () => {
    localStorage.setItem("name", name)
    localStorage.setItem("password", password)
  }

  const removeData = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("password")
  }

  return (
    <>
      <input
        type="text"
        id="userInput"
        value={name}
        placeholder="Enter something..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        value={password}
        type="password"
        id="passwordInput"
        placeholder="Enter password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => saveData()} type="button">Save Data</button>
      <button onClick={() => removeData()} type="button">Remove Data</button>
    </>
  );
};

export default App;
