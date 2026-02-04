import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

const App = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(23)

  return (
    <>
      <Profile name={name} age={age} /> 
    </>
  );
};

export default App;
