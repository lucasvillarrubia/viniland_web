import axios from "axios"
import { BASE_URL } from "../../utils/constants"
import { createOrderFailure, fetchOrdersFailure, fetchOrdersSuccess, startFetchingOrders } from "./ordersSlice";

export const getOrders = async (dispatch, currentUser) => {
        dispatch(startFetchingOrders());
        try {
                const orders = await axios.get(`${BASE_URL}/orders`, { headers: { 'x-token': currentUser.token } });
                if (orders) {
                        dispatch(fetchOrdersSuccess(orders.data.data));
                        console.log("traje las ordenes :)");
                        console.log(orders);
                }
        } catch (error) {
                console.error({ error });
                dispatch(fetchOrdersFailure("Usuario no ingresado"));
        }
}

export const createOrder = async (dispatch, currentUser, order) => {
        try {
                const res = await axios.post(`${BASE_URL}/orders`, order, { headers: { 'x-token': currentUser.token } });
                if (res) {
                        dispatch(getOrders(dispatch, currentUser));
                }
        } catch (error) {
                console.error({ error });
                dispatch(createOrderFailure());
        }
}