import React from "react";

const UserDetails = (prop) => {
  return (
    <>
      <h1>I am a {prop.role}</h1>
      <h1>My current salary is ₹ {prop.salary}</h1>
    </>
  );
};

export default UserDetails;
