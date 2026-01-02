import React from "react";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import CarProduct from "./components/CarProduct";
import BikeProduct from "./components/BikeProduct";
import Products from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* Links to different routes */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />}>
          <Route path="/products/cars" element={<CarProduct />} />
          <Route path="/products/bikes" element={<BikeProduct />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
