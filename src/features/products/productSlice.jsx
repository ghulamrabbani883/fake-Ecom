import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    singleProduct:{},
    category:[],
    status:'idle',
    error:null
}

const BASE_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('products/fetch', async (category)=>{
    try {
        let requestURL = '';
        if(category === ''){
            requestURL = BASE_URL
        }else{
            requestURL = BASE_URL + `/category/${category}`
        }
        const res = await axios.get(requestURL);
        // console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        initialState.error = error
    }
})

export const fetchProductCategories = createAsyncThunk('products/fetchCategories', async ()=>{
    try {
        const res = await axios.get(BASE_URL + '/categories' );
        return res.data
    } catch (error) {
        initialState.error = error
    }
})

export const fetchSingleProducts = createAsyncThunk('products/fetchSingleProducts', async (id)=>{
    try {
        const res = await axios.get(BASE_URL + '/' + id);
        return res.data
    } catch (error) {
        console.log(error)
        initialState.error = error
    }
})

export const createProduct = createAsyncThunk('products/create', async (product)=>{
    try {
        const res = await axios.post(BASE_URL, product);
        return res.data
    } catch (error) {
        console.log(error)
        initialState.error = error
    }
})

export const updateProduct = createAsyncThunk('products/update', async (product, id)=>{
    try {
        const res = await axios.put(BASE_URL + id, product)
        return res.data
    } catch (error) {
        console.log(error)
        initialState.error = error
    }
})

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state, action)=>{
            state.status = 'pending'
        })
        .addCase(fetchProducts.fulfilled, (state,action)=>{
            state.products = action.payload
            state.status = 'idle'
        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.error = action.error
            state.status = 'idle'

        })
        .addCase(fetchSingleProducts.pending, (state,action)=>{
            state.status = 'pending'
        })
        .addCase(fetchSingleProducts.fulfilled, (state, action)=>{
            state.singleProduct = action.payload;
            state.status = 'idle'
        })
        .addCase(fetchSingleProducts.rejected, (state,action)=>{
            state.error = action.error;
            state.status = 'idle'
        })
        .addCase(createProduct.pending, (state, action)=>{
            state.status = 'pending'
        })
        .addCase(createProduct.fulfilled,(state, action)=>{
            state.singleProduct = action.payload
            state.status = 'idle'
        })
        .addCase(createProduct.rejected, (state, action)=>{
            state.error = action.error
            state.status = 'idle'
        })
        .addCase(fetchProductCategories.pending,(state, action)=>{
            state.status = 'pending'
        })
        .addCase(fetchProductCategories.fulfilled,(state, action)=>{
            state.category = action.payload
            state.status = 'idle'
        })
        .addCase(fetchProductCategories.rejected, (state, action)=>{
            state.error = action.error
            state.status = 'idle'
        })
    }
})

export const getAllProducts = (state)=>state.products.products
export const getSingleProduct = (state)=>state.products.singleProduct
export const getProductStatus = (state)=>state.products.status
export const getProductError = (state)=>state.products.error
export const getProductCategory = (state)=>state.products.category



export default productSlice.reducer;