import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartsPrice, fetchCartsProducts, getAllCartProducts, getCartError, getCartPrice, getCartStatus } from "../features/carts/cartSlice";
import CartExcerpt from "./../features/carts/CartExcerpt";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Components/Loader";

const Cart = () => {
  const dispatch = useDispatch()
  const carts = useSelector(getAllCartProducts);
  const cartPrice = useSelector(getCartPrice);
  const cartsArray = Object.entries(carts);
  const cartStatus = useSelector(getCartStatus)
  const cartError = useSelector(getCartError)

  useEffect(()=>{
    dispatch(fetchCartsProducts());
    dispatch(fetchCartsPrice());
  },[])

  console.log(carts)

  if(cartStatus === 'pending'){
    return <Loader />
  }
  
  if(cartError){
    return <p>{JSON.stringify(cartError)}</p>
  }

  return (
    <div className="carts">
      <ToastContainer />
      <h2 className="cartHeader">Your Cart Products</h2>
      <div className="cartsWrapper">
        <div className="cartExcerptWrapper">
          {carts.length === 0 ? (
            <h2>Your Cart is Empty</h2>
          ) : (
            cartsArray.map(([index, product]) => {
              return <CartExcerpt product={product} key={index + 1} />;
            })
          )}
        </div>
        <div className="cartCheckout">
          <div className="checkoutHeader">
            <h3 className="">Home Delivery</h3>
          </div>
          <div className="checkoutBody">
            <p>Sub Total = &#8377;{parseFloat(cartPrice).toFixed(2)}</p>
            <p>Delivery = &#8377;{0}</p>
            <b>Total = &#8377; {parseFloat(cartPrice).toFixed(2)}</b>
          </div>
          <div className="checkOutFooter">
            <button className="checkoutButton">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
