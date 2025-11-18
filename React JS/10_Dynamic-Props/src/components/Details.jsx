import React from "react";

// Default Props
const Details = ({ name, age = 20 }) => {
  return (
    <>
      <h1>Student's Name: {name}</h1>
      <h1>Student's Age: {age}</h1>
    </>
  );
};

export default Details;
