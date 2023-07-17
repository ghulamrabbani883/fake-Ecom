import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  singleCart: {},
  price: null,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    fetchCartsProducts: (state, action) => {
      state.status = 'pending'
      let cartProducts = JSON.parse(localStorage.getItem("carts"));
      if (cartProducts === null || cartProducts === undefined) {
        cartProducts = [];
      }
      state.carts = cartProducts;
      state.status = 'idle'
    },
    setCartsProducts: (state, action) => {
      let cartProducts = JSON.parse(localStorage.getItem("carts"));
      if (cartProducts === null || cartProducts === undefined) {
        cartProducts = [];
      }
      let comingProduct = action.payload
      comingProduct = {...comingProduct, qty:1}
      cartProducts = [...cartProducts, comingProduct];
      localStorage.setItem("carts", JSON.stringify(cartProducts));
      state.carts = JSON.parse(localStorage.getItem("carts"));
    },
    updateCartProduct:(state,action)=>{
      let cartProducts = JSON.parse(localStorage.getItem("carts"));
      cartProducts = cartProducts.map((product)=>{
        if(product.id === action.payload.id){
          product.qty = product.qty + action.payload.qty;
        }
        return product
      })
      localStorage.setItem("carts", JSON.stringify(cartProducts));
      state.carts = JSON.parse(localStorage.getItem("carts"));
    },
    fetchCartsPrice: (state, action) => {
      state.status = 'pending'
      let price = 0;
      let cartsProduct = JSON.parse(localStorage.getItem("carts"));
      if (cartsProduct === null || cartsProduct === undefined) {
        cartsProduct = [];
      }
      cartsProduct.forEach((product) => {
        price += product.price * product.qty;
      });

      state.price = price;
      state.status = 'idle'
    },
    deleteCartProduct: (state, action) => {
      state.status = 'pending'
      let cartsProduct = JSON.parse(localStorage.getItem("carts"));
      cartsProduct = cartsProduct.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("carts", JSON.stringify(cartsProduct));
      state.carts = JSON.parse(localStorage.getItem("carts"));
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {},
});

export const {
  fetchCartsProducts,
  setCartsProducts,
  fetchCartsPrice,
  deleteCartProduct,
  updateCartProduct
} = cartSlice.actions;

export const getAllCartProducts = (state) => state.carts.carts;
export const getCartPrice = (state) => state.carts.price;
export const getSingleCartProduct = (state) => state.carts.singleCart;
export const getCartStatus = (state) => state.carts.status;
export const getCartError = (state) => state.carts.error;

export default cartSlice.reducer;
