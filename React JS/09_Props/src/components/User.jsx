import React from "react";
import UserDetails from "./UserDetails";

const User = ({ name, age }) => {
  const role = "Web Developer";
  const salary = 1000000;

  return (
    <>
      <h1>Hello, {name}</h1>
      <h1>I am {age} years old</h1>

      <UserDetails role={role} salary={salary} /> 
    </> 
  );
};

export default User;
