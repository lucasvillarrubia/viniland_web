import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        orders: null,
        loading: false,
        error: null
}

const ordersSlice = createSlice({
        name: 'orders',
        initialState,
        reducers: {
                fetchOrdersSuccess: (state, action) => {
                        return {
                                ...state,
                                loading: false,
                                error: null,
                                orders: { ...action.payload }
                        }
                },
                fetchOrdersFailure: (state, action) => {return { ...state, loading: false, error: action.payload }},
                createOrderFailure: (state, action) => {return { ...state, loading: false, error: action.payload }},
                startFetchingOrders: state => {return { ...state, loading: true }},
                clearOrders: state => {return { ...state, orders: null }},
                clearError: state => {return { ...state, error: null }}
        }
});

export const { 
        fetchOrdersSuccess,
        fetchOrdersFailure,
        createOrderFailure,
        startFetchingOrders,
        clearOrders,
        clearError
} = ordersSlice.actions;

export default ordersSlice.reducer;