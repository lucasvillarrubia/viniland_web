import React from 'react'
import OrderCard from './OrderCard'
import { OrderCardsContainer } from './OrderStyles'
import { useSelector } from 'react-redux'

const Orders = () => {
	const { orders, error, loading } = useSelector(state => state.orders);
	if (loading && !orders) {
		return (<p>...</p>);
	}
	if (error) {
		return (<p>{error}</p>);
	}
	return (
		<OrderCardsContainer>
			{
				orders?.length
					? (orders.map(order => <OrderCard key={order._id} {...order} />))
					: (<h6>No hiciste ningún pedido todavía</h6>)
			}
		</OrderCardsContainer>
	)
}

export default Orders