import React, { useEffect } from 'react'
// import UserInfo from '../../components/userInfo/UserInfo'
import Orders from '../../components/orders/Orders'
import { MyOrdersUI, MyOrdersTitle, MyOrdersButton } from './MyOrdersStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrders } from '../../features/orders/ordersAPI'
import { clearError, fetchOrdersFailure } from '../../features/orders/ordersSlice'

const MyOrders = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser } = useSelector(state => state.users);
	const { orders, error } = useSelector(state => state.orders);
	useEffect(() => {
		if (!orders) { getOrders(dispatch, currentUser) }
		if (!currentUser?.token) { dispatch(fetchOrdersFailure()) }
		else { error && dispatch(clearError()) }
	}, [dispatch, error, orders, currentUser?.token]);

	return (
		<MyOrdersUI>
			<MyOrdersTitle>Mis órdenes</MyOrdersTitle>
			{/* <UserInfo /> */}
			<Orders />
			<MyOrdersButton onClick={() => navigate('/')}>Volver a inicio</MyOrdersButton>
		</MyOrdersUI>
	)
}

export default MyOrders