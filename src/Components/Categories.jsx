import React from "react";
import electronics from '../assets/electronics.avif'
import jwellery from '../assets/jwellery2.avif'
import womens_clothing from '../assets/womens-clothing.avif'
import mens_clothing from '../assets/mens-clothing2.avif'
import { Link } from 'react-router-dom'
import './style.css'
import { useSelector } from "react-redux";
import { getProductCategory } from "../features/products/productSlice";

const Categories = () => {
    const categories = useSelector(getProductCategory)
    // console.log(categories)
    // const categoryArray = Object.entries(categories)
    // console.log(categoryArray)
  return (
    <div className="categories">
      <h3 className="categoriesTitle">Our Popular Categories</h3>
      <div className="categoryWrapper">
        <div className="category">
          <figure className="categoryImage">
            <img src={electronics} alt={electronics} height={200} />
          </figure>
          <Link to={`/products/category/${categories[0]}`}>
            <h3>Electronics</h3>
          </Link>
        </div>
        <div className="category">
          <figure className="categoryImage">
            <img src={jwellery} alt={jwellery} height={200} />
          </figure>
          <Link to={`/products/category/${categories[1]}`}>
            <h3>Jwellery</h3>
          </Link>
        </div>
        <div className="category">
          <figure className="categoryImage">
            <img src={mens_clothing} alt={mens_clothing} height={200} />
          </figure>
          <Link to={`/products/category/${categories[2]}`}>
            <h3>Men's Clothing</h3>
          </Link>
        </div>
        <div className="category">
          <figure className="categoryImage">
            <img src={womens_clothing} alt={womens_clothing} height={200} />
          </figure>
          <Link to={`/products/category/${categories[3]}`}>
            <h3>Women's Clothing</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
