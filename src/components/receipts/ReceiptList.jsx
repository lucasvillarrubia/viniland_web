import React from 'react'
import ReceiptCard from './ReceiptCard'
import { ReceiptUI, ReceiptCardsContainer, ReceiptSection, ReceiptCosts, ReceiptConfirm, ReceiptSpan, ReceiptTotalText } from './ReceiptExtrasStyles'
import { formatPrice } from '../../utils/formatPrice'


const Receipt = (order) => {
        return (
                <ReceiptUI>
                        <ReceiptCardsContainer>
                                {
                                        order?.items.map(product => <ReceiptCard key={product.id} {...product} />)
                                }
                        </ReceiptCardsContainer>
                        <ReceiptSection>
                                <ReceiptCosts>
                                        <div>
                                                <p>Subtotal:</p>
                                                <p>{formatPrice(order?.price)}</p>
                                        </div>
                                        <div>
                                                <p>Envío:</p>
                                                <p>{formatPrice(order?.shippingCost)}</p>
                                        </div>
                                </ReceiptCosts>
                                <ReceiptSpan></ReceiptSpan>
                                <ReceiptConfirm>
                                        <div>
                                                <p>Total:</p>
                                                <ReceiptTotalText>{formatPrice(order?.total)}</ReceiptTotalText>
                                        </div>
                                </ReceiptConfirm>
                        </ReceiptSection>
                </ReceiptUI>
        )
}

export default Receipt