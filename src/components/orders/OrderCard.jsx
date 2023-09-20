import React from 'react'
import { OrderCardUI, OrderCardNumber, OrderCardTotal, OrderCardDate } from './OrderStyles'

const OrderCard = () => {
        return (
                <OrderCardUI>
                        <OrderCardNumber>Órden #123456789</OrderCardNumber>
                        <OrderCardDate>05/09/23 - 00:17 hs</OrderCardDate>
                        <OrderCardTotal>$190194</OrderCardTotal>
                </OrderCardUI>
        )
}

export default OrderCard