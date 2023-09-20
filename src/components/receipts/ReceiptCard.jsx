import React from 'react'
import { ReceiptCardUI, ReceiptCardData, ReceiptCardName, ReceiptCardPrice, ReceiptCardSpan } from './ReceiptExtrasStyles'

const ReceiptCard = () => {
  return (
        <ReceiptCardUI>
                <img src="./images/lasttimethatisawyou.png" alt="imagen-prod-1" />
                <ReceiptCardData>
                        <ReceiptCardName>Last Time That I Saw You</ReceiptCardName>
                        <ReceiptCardPrice>$100000000</ReceiptCardPrice>
                        <ReceiptCardSpan>123456789 unidades</ReceiptCardSpan>
                </ReceiptCardData>
        </ReceiptCardUI>
  )
}

export default ReceiptCard