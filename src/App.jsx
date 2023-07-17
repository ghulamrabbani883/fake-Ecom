import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SingleProduct from "./features/products/SingleProduct";
import Cart from "./Pages/Cart";
import AddProduct from "./features/products/AddProduct";
import User from "./features/users/User";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:categoryName" element={<Products />} />
        <Route path="/products/addproduct" element={<AddProduct />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/me" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
