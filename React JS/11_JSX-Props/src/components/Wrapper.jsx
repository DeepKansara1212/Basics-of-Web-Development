import React from "react";

const Wrapper = ({ children, color="green" }) => {
  return (
    <>
      <div
        style={{
          color: color,
          border: "2px solid whitesmoke",
          width: "400px",
          margin: "30px 10px",
          padding: "10px 20px",
          textAlign: "center",
        }} 
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
