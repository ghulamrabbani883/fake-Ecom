import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { getAllCartProducts } from "../features/carts/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const carts = useSelector(getAllCartProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user);

  const handleSearchClick = (e) => {
    // e.preventDefault()
    navigate(`/products/?search=${searchQuery}`);
  };
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>FAK-E-COM</h1>
        </Link>
      </div>
      <ul className="menuList">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/products/addproduct">
          <li>Add New Product</li>
        </Link>
      </ul>
      <div className="search">
        <input
          type="search"
          className="searchInput"
          placeholder="Search Product"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AiOutlineSearch
          className="searchIncon"
          size={24}
          onClick={handleSearchClick}
        />
      </div>
      <div className="authController">
        {!isAuthenticated ? (
          <div>
            <AiOutlineLogin size={24} onClick={() => loginWithRedirect()} />
            <p>Login</p>
          </div>
        ) : (
          <div>
            <AiOutlineLogout size={24} onClick={() => logout()} />
            <p>Logout</p>
          </div>
        )}

        <Link to="/carts">
          <AiOutlineShoppingCart size={24} />
          <p className="cartCount">{carts === null ? 0 : carts?.length}</p>
          <p>Cart</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
