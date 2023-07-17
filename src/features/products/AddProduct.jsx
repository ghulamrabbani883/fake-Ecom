import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import {
  createProduct,
  getProductCategory,
  getProductError,
  getProductStatus,
  
} from "./productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Components/Loader";

const AddProduct = () => {
  const [product, setProduct] = useState({
    id: Number,
    category: "",
    description: "",
    image: "",
    title: "",
    price: Number,
    rating: { rate: Number, count: Number },
  });

  const dispatch = useDispatch();
  const productStatus = useSelector(getProductStatus);
  const productError = useSelector(getProductError);
  const productCategories = useSelector(getProductCategory);
  const productCategoryArray = Object.entries(productCategories);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
    setProduct({
      id: Number,
      category: "",
      description: "",
      image: "",
      title: "",
      price: Number,
      rating: { rate: Number, count: Number },
    });
  };

  if (productStatus === "pending") {
    return (
      <Loader />
    );
  }

  if (productError) {
    return <p>{JSON.stringify(productError)}</p>;
  }

  return (
    <div className="addProduct">
      <ToastContainer />
      <div className="addProductWrapper">
        <div className="addProductHeader">
          <MdOutlineProductionQuantityLimits size={28} />
          <h2>Add New Product</h2>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="inputBox">
            <label htmlFor="title">Product Title:</label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter product title"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="category">Product Category:</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
            >
              <option value="">Choose product category</option>
              {productCategoryArray.map((category,index) => {
                return <option value={category[1]} key={index+1}>{category[1]}</option>;
              })}
            </select>
          </div>
          <div className="inputBox">
            <label htmlFor="description">Product Description:</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows={5}
            ></textarea>
          </div>

          <div className="inputBox">
            <label htmlFor="price">Product Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="ENter price"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="image">Product Image URL:</label>
            <input
              type="url"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Paste your image url"
            />
          </div>

          <div className="inputBox">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
