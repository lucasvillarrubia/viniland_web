import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartReducers";
import { SHIPPING_COST } from "../../utils/constants";

const initialState = {
        cartItems: [],
        shippingCost: 0,
        cartOnDisplay: false
}


export const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
                addToCart: (state, action) => {
                        return {
                                ...state,
                                cartItems: addItemToCart(state.cartItems, action.payload),
                                shippingCost: SHIPPING_COST
                        }
                },
                removeFromCart: (state, action) => {
                        return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) }
                },
                cleanCart: state => {return { ...state, cartItems: [], shippingCost: 0 }},
                toggleCartDisplay: state => {return { ...state, cartOnDisplay: !state.cartOnDisplay }}
        }
});

export const { addToCart, removeFromCart, cleanCart, toggleCartDisplay } = cartSlice.actions;

export default cartSlice.reducer;