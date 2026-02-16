import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handle = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  const remove = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  return (
    <>
      <input onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" value={username} />

      <br />
      <br />  

      <input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" value={password} />

      <br /><br />

      <button onClick={handle}>Done</button>

      <br /><br /> 

      <button onClick={remove}>Remove</button>
    </>
  );
};

export default App;
