import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import StarRatings from "react-star-ratings";

const ProductExcerpt = ({ product }) => {
  const handleRating = (e) => {};
  return (
    <div className="productExcerpt">
      <h3 className="productTitle">{product.title.substring(0, 50)}</h3>
      <figure className="productImage">
        <img src={product.image} alt={product.title} height={100} />
      </figure>
      <div className="productDescription" maxLength="100">
        <p>{product.description.substring(0, 100)}..... </p>
      </div>
      <div className="rating">
        <span className="ratingCount">{product.rating.rate + " "}</span>

        <StarRatings
          rating={product.rating.rate}
          starRatedColor="orange"
          changeRating={handleRating}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="3px"
          name="rating"
        />
      </div>
      <div className="productActions">
        <p> &#8377; {product.price}</p>
        <Link to={`/products/${product.id}`}>See Product</Link>
      </div>
    </div>
  );
};

export default ProductExcerpt;
