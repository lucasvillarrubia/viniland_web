import React from 'react'
import OrderCard from './OrderCard'
import { OrderCardsContainer } from './OrderStyles'

const Orders = () => {
  return (
    <OrderCardsContainer>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </OrderCardsContainer>
  )
}

export default Orders