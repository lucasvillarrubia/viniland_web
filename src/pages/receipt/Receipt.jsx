import React, { useEffect, useState } from 'react'
// import ShippingInfo from '../../components/shippingInfo/ShippingInfo'
import ReceiptList from '../../components/receipts/ReceiptList'
import { ReceiptUI, ReceiptTitle, ReceiptSubtitle, ReceiptButton } from './ReceiptStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrders } from '../../features/orders/ordersAPI'
import { formatDate } from '../../utils/formatDate'

const Receipt = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser } = useSelector(state => state.users);
	const { orders } = useSelector(state => state.orders);
	const { oId } = useParams();
	const [currentOrder, setCurrentOrder] = useState(null);
	useEffect(() => {
		if (!orders) { getOrders(dispatch, currentUser) }
		setCurrentOrder(Object.entries(orders)
			.map(([ _orderId, order ]) => { return order })
			.find(order => order._id === oId));
	}, [oId, currentUser?.id, orders, dispatch]); 
	return (
		<ReceiptUI>
			<ReceiptTitle>Orden #{oId}</ReceiptTitle>
			{
				currentOrder
				? <ReceiptSubtitle>Creada el {formatDate(currentOrder.createdAt)}</ReceiptSubtitle>
				: (<p>...</p>)
			}
			{/* <ReceiptSubtitle>Datos de envío:</ReceiptSubtitle> */}
			{/* <ShippingInfo /> */}
			<ReceiptSubtitle>Productos:</ReceiptSubtitle>
			{
				currentOrder ? (<ReceiptList {...currentOrder} />) : (<p>...</p>)
			}
			<ReceiptButton onClick={() => navigate('/my-orders')}>Volver a mis órdenes</ReceiptButton>
		</ReceiptUI>
	)
}

export default Receipt