import React from 'react'
import PurchaseCard from './PurchaseCard'
import { PurchaseCartUI, PurchaseCartCardsContainer, PurchaseCartSection, PurchaseCartCosts, PurchaseCartConfirm, PurchaseCartSpan, PurchaseTotalText } from './PurchaseStyles'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'


const Purchase = ({ cartItems, shippingCost }) => {
	const cartTotalCost = cartItems.map(product => product.xAdded * product.price).reduce((acc, qty) => acc += qty, 0);

        return (
                <PurchaseCartUI>
                        <PurchaseCartCardsContainer>
                                {
                                        cartItems.map(product => <PurchaseCard key={product.id} {...product} />)
                                }
                        </PurchaseCartCardsContainer>
                        <PurchaseCartSection>
                                <PurchaseCartCosts>
                                        <div>
                                                <p>Subtotal:</p>
                                                <p>{formatPrice(cartTotalCost)}</p>
                                        </div>
                                        <div>
                                                <p>Envío:</p>
                                                <p>{formatPrice(shippingCost)}</p>
                                        </div>
                                </PurchaseCartCosts>
                                <PurchaseCartSpan></PurchaseCartSpan>
                                <PurchaseCartConfirm>
                                        <div>
                                                <p>Total:</p>
                                                <PurchaseTotalText>{formatPrice(cartTotalCost + shippingCost)}</PurchaseTotalText>
                                        </div>
                                </PurchaseCartConfirm>
                        </PurchaseCartSection>
                </PurchaseCartUI>
        )
}

export default Purchase