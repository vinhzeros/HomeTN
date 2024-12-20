//cartslices
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cart'))||[]

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item._id === action.payload.item._id);

            if (existingItem) {
                existingItem.quantity = Number(existingItem.quantity) + Number(action.payload.quantity);
            } else {
                state.items.push({ ...action.payload.item, quantity: action.payload.quantity });
            } 
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        updateCartItemQuantity: (state, action) => {
            const item = state.items.find((item) => item._id === action.payload._id);

            if (item) {
                item.quantity = action.payload.quantity;
            }
            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart')
        },
    },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;