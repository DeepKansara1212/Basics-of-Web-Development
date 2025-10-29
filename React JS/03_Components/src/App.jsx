import React from "react";
import "./App.css";
import Card from "./components/Card";

const Comp1 = () => {
  return <h1>This is Compponent 1</h1>;
};

const App = () => {
  return (
    <>
      <h1>React Components</h1>
      <Comp1 />
      <Card />
    </>
  );
};

export default App;
