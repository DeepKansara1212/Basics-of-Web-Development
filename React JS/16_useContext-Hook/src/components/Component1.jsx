import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Component1 = () => {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Hello, {user} from Component1</h3>    
    </>
  );
};

export default Component1;
