import React from "react";
import Details from "./Details";

const Student = (props) => {
//   const name = "John";

  return (
    <>
      <h1>Student: {props.student}</h1>

        {/* Default Props */}
      <Details name="Jack" /> 
    </>
  );
};

export default Student;
