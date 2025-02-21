import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/productData';

const initialState = { products };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
