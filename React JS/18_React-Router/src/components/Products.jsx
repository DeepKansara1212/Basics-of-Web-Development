import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <nav>
        <Link to="/products/cars">Cars</Link>
        <Link to="/products/bikes">Bikes</Link>
      </nav>
      <Outlet />
    </> 
  );
};

export default Products;
