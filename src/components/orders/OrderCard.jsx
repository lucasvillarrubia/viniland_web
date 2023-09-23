import React from 'react'
import { OrderCardUI, OrderCardNumber, OrderCardTotal, OrderCardDate } from './OrderStyles'
import { formatPrice } from '../../utils/formatPrice'
import { formatDate } from '../../utils/formatDate'
import { useNavigate } from 'react-router-dom'

const OrderCard = (order) => {
const navigate = useNavigate();

        return (
                <OrderCardUI onClick={() => navigate(`/receipt/${order._id}`)}>
                        <OrderCardNumber>Órden #{order._id}</OrderCardNumber>
                        <OrderCardDate>Realizada el {formatDate(order.createdAt)}</OrderCardDate>
                        <OrderCardTotal>{formatPrice(order.total)}</OrderCardTotal>
                </OrderCardUI>
        )
}

export default OrderCard