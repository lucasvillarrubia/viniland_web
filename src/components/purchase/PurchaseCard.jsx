import React from 'react'
import { PurchaseCartCardUI, PurchaseCartCardControls, PurchaseCartCardData, PurchaseCartCardName, PurchaseCartCardPrice, PurchaseCartCardButton, PurchaseCartCardSpan } from './PurchaseStyles'
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../features/cart/cartSlice';

const PurchaseCard = (product) => {
	const dispatch = useDispatch();

        return (
                <PurchaseCartCardUI>
                        <img src={product.image} alt={product.name} />
                        <PurchaseCartCardData>
                                <div>
                                        <PurchaseCartCardName>{product.name}</PurchaseCartCardName>
                                        <PurchaseCartCardPrice>{formatPrice(product.price)}</PurchaseCartCardPrice>
                                </div>
                                <PurchaseCartCardControls>
                                        <PurchaseCartCardButton onClick={() => dispatch(removeFromCart(product.id))}>-</PurchaseCartCardButton>
                                        <PurchaseCartCardSpan>{product.xAdded}</PurchaseCartCardSpan>
                                        <PurchaseCartCardButton onClick={() => dispatch(addToCart(product))}>+</PurchaseCartCardButton>
                                </PurchaseCartCardControls>
                        </PurchaseCartCardData>
                </PurchaseCartCardUI>
        )
}

export default PurchaseCard