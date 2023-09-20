import React from 'react'
import ReceiptCard from './ReceiptCard'
import { ReceiptUI, ReceiptCardsContainer, ReceiptSection, ReceiptCosts, ReceiptConfirm, ReceiptSpan, ReceiptTotalText } from './ReceiptExtrasStyles'


const Receipt = () => {
  return (
        <ReceiptUI>
                <ReceiptCardsContainer>
                        <ReceiptCard />
                        <ReceiptCard />
                        <ReceiptCard />
                        <ReceiptCard />
                        <ReceiptCard />
                        <ReceiptCard />
                </ReceiptCardsContainer>
                <ReceiptSection>
                        <ReceiptCosts>
                                <div>
                                        <p>Subtotal:</p>
                                        <p>$0</p>
                                </div>
                                <div>
                                        <p>Envío:</p>
                                        <p>Gratis</p>
                                </div>
                        </ReceiptCosts>
                        <ReceiptSpan></ReceiptSpan>
                        <ReceiptConfirm>
                                <div>
                                        <p>Total:</p>
                                        <ReceiptTotalText>$0</ReceiptTotalText>
                                </div>
                        </ReceiptConfirm>
		</ReceiptSection>
        </ReceiptUI>
  )
}

export default Receipt