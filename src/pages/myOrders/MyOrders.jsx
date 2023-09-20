import React from 'react'
import UserInfo from '../../components/userInfo/UserInfo'
import Orders from '../../components/orders/Orders'
import { MyOrdersUI, MyOrdersTitle } from './MyOrdersStyles'

const MyOrders = () => {
  return (
    <MyOrdersUI>
      <MyOrdersTitle>Mis órdenes</MyOrdersTitle>
      <UserInfo />
      <Orders />
    </MyOrdersUI>
  )
}

export default MyOrders