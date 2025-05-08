import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], products: [], loading: false },
  reducers: { /* add/remove as before */ },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, state => { state.loading = false; });
  }
});

export default cartSlice.reducer;
