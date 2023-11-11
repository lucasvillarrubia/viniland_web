import React from 'react'
import { CartBG, CartUI, CartCardsContainer, CartSection, CartCosts, CartConfirm, CartSpan, CartPurchaseButton, TotalText, CartExit } from './CartStyles'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartDisplay } from '../../features/cart/cartSlice';
import { AMOUNT_FREE_SHIPPING } from '../../utils/constants';
import { formatPrice } from '../../utils/formatPrice';

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { cartOnDisplay, cartItems, shippingCost } = useSelector(state => state.cart);
	const cartTotalCost = cartItems.map(product => product.xAdded * product.price).reduce((acc, qty) => acc += qty, 0);

        return (
		<>
		{(cartOnDisplay) && 
			<CartBG onClick={() => dispatch(toggleCartDisplay())}></CartBG>
		}
		{(cartOnDisplay) && 
			<CartUI>
				<CartExit onClick={() => dispatch(toggleCartDisplay())}>X</CartExit>
				<CartSection>
					<p>Tus productos</p>
					{(!cartItems.length) &&
						<h3>Todavía no agregaste ningún producto</h3>
					}
				</CartSection>
                                <CartCardsContainer>
					{
						cartItems.map(product => <CartCard key={product.id} {...product} />)
					}
				</CartCardsContainer>
				<CartSection>
					<CartCosts>
						<div>
							<p>Subtotal:</p>
							<p>{formatPrice(cartTotalCost)}</p>
						</div>
						<div>
							<p>Envío:</p>
							<p>{(cartTotalCost < 15000) ? formatPrice(shippingCost) : "GRATIS"}</p>
						</div>
					</CartCosts>
					<CartSpan></CartSpan>
					<p>Envios GRATIS a partir de ${AMOUNT_FREE_SHIPPING}</p>
					<CartSpan></CartSpan>
					<CartConfirm>
						<div>
							<p>Total:</p>
							<TotalText>{(cartTotalCost < 15000) ? formatPrice(cartTotalCost + shippingCost) : formatPrice(cartTotalCost)}</TotalText>
						</div>
						<CartPurchaseButton
							disabled={!cartItems.length}
							onClick={() => {
									dispatch(toggleCartDisplay());
									navigate('/checkout');
								}
							}
						>
							COMPRAR
						</CartPurchaseButton>
						<a href="#" onClick={() => dispatch(toggleCartDisplay())}>Ver más productos</a>
					</CartConfirm>
				</CartSection>
			</CartUI>
		}
		</>
        )
}

export default Cart