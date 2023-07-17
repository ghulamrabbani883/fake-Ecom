import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProducts,
  getProductError,
  getProductStatus,
  getSingleProduct,
} from "./productSlice";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { setCartsProducts } from "../carts/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../Components/Loader";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(getSingleProduct);
  const productStatus = useSelector(getProductStatus);
  const productError = useSelector(getProductError);
  const handleRating = (e) => {};
  const handleAddToCart = () => {
    dispatch(setCartsProducts(product));
    toast('Item added to cart')
  };

  useEffect(() => {
    dispatch(fetchSingleProducts(productId));
  }, []);

  if (productStatus === "pending") {
    return <Loader />;
  }
  if (productError) {
    return <p>{JSON.stringify(productError)}</p>;
  }
  return (
    <div className="singleProduct">
      <ToastContainer />
      <h2 className="SingleProductTitle">{product.title}</h2>
      <figure>
        <img src={product.image} alt={product.title} height={200} width={300} />
      </figure>
      <div className="SingleProductDescription" maxLength="100">
        <p>{product?.description}</p>
      </div>
      <div className="rating">
        {product?.rating?.rate + " "}
        <StarRatings
          rating={product?.rating?.rate}
          starRatedColor="orange"
          changeRating={handleRating}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="3px"
          name="rating"
        />
      </div>
      <div className="SingleProductActions">
        <p> &#8377; {product.price}</p>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
