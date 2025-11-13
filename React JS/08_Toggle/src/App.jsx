import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [visible, setVisible] = useState(true);

  // const toggle = () => {
  //   if (!visible) {
  //     setVisible(true);
  //     console.log(visible);
  //   } else {
  //     setVisible(false);
  //     console.log(visible);
  //   }
  // };

  return (
    <>

      {/* <button onClick={toggle}>Click to toggle</button> */}


      <button onClick={() => setVisible(!visible)}>Click to toggle</button> 

      {visible ? <h1>Text shown</h1> : null}
    </>
  );
};

export default App;
