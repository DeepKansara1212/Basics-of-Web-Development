import React, { useState } from "react";
import Component1 from "./components/Component1";
import UserContext from "./context/UserContext";

const App = () => {
  const [user, setUser] = useState("John Doe");
  
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Hello, {user}</h1>
        <Component1 />
      </UserContext.Provider> 
    </>
  );
};

export default App;
