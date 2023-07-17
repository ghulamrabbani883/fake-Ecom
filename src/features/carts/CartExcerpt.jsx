import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteCartProduct, fetchCartsPrice, updateCartProduct } from "./cartSlice";

const CartExcerpt = ({ product}) => {
  const dispatch = useDispatch();
  const handleQtyClick = (qty,id)=>{
      dispatch(updateCartProduct({qty,id}))
      dispatch(fetchCartsPrice());
  }
  const handleCartItemDelete = (id) => {
    dispatch(deleteCartProduct(id));
    dispatch(fetchCartsPrice());
  };

  return (
    <div className="cartExcerpt">
      <figure className="cartExcerptLeft">
        <img src={product.image} alt={product.title} width={100} height={100} />
      </figure>
      <div className="cartExcerptRight">
        <h3 className="cartExcerptTitle">{product.title.substring(0, 30)}</h3>
        <p className="cartExcerptPara">
          {product.description.substring(0, 50)}
        </p>
        <div className="cartActions">
          <div className='cartQty'>
              <span>Qty: </span>
              <div className='qtyClass'>
                {
                  product.qty > 1 ? <AiOutlineMinus className='cartIcons' onClick={()=>handleQtyClick(-1 ,product.id)} size={24}  /> :' '
                }
                <span>{product.qty}</span>
                <AiOutlinePlus className='cartIcons' onClick={()=>handleQtyClick(1,product.id)} size={24} />
              </div>
            </div>
          <h3> &#8377; {parseFloat(product.price * product.qty).toFixed(2)}</h3>
          <AiOutlineDelete
            className="cartIcons"
            onClick={() => handleCartItemDelete(product.id)}
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default CartExcerpt;
