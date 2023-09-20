import React from 'react'
import ShippingInfo from '../../components/shippingInfo/ShippingInfo'
import ReceiptList from '../../components/receipts/ReceiptList'
import { ReceiptUI, ReceiptTitle, ReceiptSubtitle } from './ReceiptStyles'

const Receipt = () => {
  return (
        <ReceiptUI>
                <ReceiptTitle>Orden #123456789</ReceiptTitle>
                <ReceiptSubtitle>Datos de envío:</ReceiptSubtitle>
                <ShippingInfo />
                <ReceiptSubtitle>Productos:</ReceiptSubtitle>
                <ReceiptList />
        </ReceiptUI>
  )
}

export default Receipt