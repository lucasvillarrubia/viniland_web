import React, { useEffect, useState } from 'react'
import ShippingInfo from '../../components/shippingInfo/ShippingInfo'
import ReceiptList from '../../components/receipts/ReceiptList'
import { ReceiptUI, ReceiptTitle, ReceiptSubtitle } from './ReceiptStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrders } from '../../features/orders/ordersAPI'
import { formatDate } from '../../utils/formatDate'

const Receipt = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(state => state.users);
	const { orders } = useSelector(state => state.orders);
	const { oId } = useParams();
	const [currentOrder, setCurrentOrder] = useState(null);
	useEffect(() => {
		if (!orders) { getOrders(dispatch, currentUser) }
		setCurrentOrder(orders?.find(order => order._id === oId));
	}, [oId, currentUser?.id, orders, dispatch]); 

	return (
		<ReceiptUI>
			<ReceiptTitle>Orden #{currentOrder?._id}</ReceiptTitle>
			<ReceiptSubtitle>Creada el {formatDate(currentOrder.createdAt)}</ReceiptSubtitle>
			<ReceiptSubtitle>Datos de envío:</ReceiptSubtitle>
			<ShippingInfo />
			<ReceiptSubtitle>Productos:</ReceiptSubtitle>
			<ReceiptList {...currentOrder} />
		</ReceiptUI>
	)
}

export default Receipt