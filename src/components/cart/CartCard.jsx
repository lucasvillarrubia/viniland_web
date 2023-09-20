import React from 'react'
import { CartCardUI, CartCardControls, CartCardData, CartCardName, CartCardPrice, CartCardButton, CartCardSpan } from './CartStyles'
import { removeFromCart, addToCart } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils/formatPrice'

const CartCard = (product) => {
        const dispatch = useDispatch();

        return (
                <CartCardUI>
                        <img src={product.image} alt={product.name} />
                        <CartCardData>
                                <div>
                                        <CartCardName>{product.name}</CartCardName>
                                        <CartCardPrice>{formatPrice(product.price)}</CartCardPrice>
                                </div>
                                <CartCardControls>
                                        <CartCardButton onClick={() => dispatch(removeFromCart(product.id))}>-</CartCardButton>
                                        <CartCardSpan>{product.xAdded}</CartCardSpan>
                                        <CartCardButton onClick={() => dispatch(addToCart(product))}>+</CartCardButton>
                                </CartCardControls>
                        </CartCardData>
                </CartCardUI>
        )
}

export default CartCard