import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getAllProducts,
  getProductCategory,
  getProductError,
  getProductStatus,
} from "../features/products/productSlice";
import ProductExcerpt from "./../features/products/ProductExcerpt";
import "./style.css";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  let productsArray = Object.entries(products);
  const categories = useSelector(getProductCategory);
  const categoriesArray = Object.entries(categories);
  const productStatus = useSelector(getProductStatus);
  const productError = useSelector(getProductError);
  const {categoryName} = useParams();
  const {search} = useLocation()
  

  const [filterCategory, setFilterCategory] = useState(categoryName || '');

  const handleCategoryClick = (category) => {
    // e.preventDefault();
    setFilterCategory(category);
  };

  useEffect(() => {
    dispatch(fetchProducts(filterCategory));
  }, [filterCategory, setFilterCategory]);

  if (productStatus === "pending") {
    return <Loader />
  }

  if (productError) {
    return <p>{JSON.stringify(productError)}</p>;
  }

  return (
    <div className="products">
      <div className="productFilter">
        <div className="productCategoris">
          <h3 className="productCategoryTitle">Categories</h3>
          <div className="productCategoryList">
            {categoriesArray.map((category) => {
              return (
                <p
                  key={category[0] + 1}
                  onClick={() => handleCategoryClick(category[1])}
                >
                  {category[1]}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="productList">
        {productsArray.map((product) => {
          return (
            <ProductExcerpt
              key={product[0] + 1}
              product={product[1]}
            ></ProductExcerpt>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
