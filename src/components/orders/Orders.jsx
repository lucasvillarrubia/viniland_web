import React from 'react'
import OrderCard from './OrderCard'
import { OrderCardsContainer } from './OrderStyles'
import { useSelector } from 'react-redux'

const Orders = () => {
	const { orders, error, loading } = useSelector(state => state.orders);
	if (loading && !orders) {
		return (<p>Cargando ordenes...</p>);
	}
	if (error) {
		return (<p>{error}</p>);
	}
	function renderOrders (ordersObj) {
		const ordersArray = Object.entries(ordersObj).map(([ _orderId, order ]) => { return order });
		let i = 0;
		if (!ordersArray.length) { return (<h6>No hiciste ningún pedido todavía</h6>) }
		return ordersArray.map(order => {
			i++; 
			return (<OrderCard key={i} {...order} />);
		});
	}
	return (
		<OrderCardsContainer>
			{
				orders
				? renderOrders(orders)
				: (<h6>No cargaron las ordenes :c</h6>)
			}
		</OrderCardsContainer>
	)
}

export default Orders