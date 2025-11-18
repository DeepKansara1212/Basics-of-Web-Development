import React from "react";
import './App.css'
import User from "./components/User";

const App = () => {
  const name = "djfj";
  const age = 4;

  return (
    <>
      <User name={name} age={age} /> 
    </>
  );
};

export default App;
