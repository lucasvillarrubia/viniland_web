import React from 'react'
import { NavIcon } from '../header/NavbarStyles'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartDisplay } from '../../features/cart/cartSlice';


const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const cartAddedCount = cartItems.map(product => product.xAdded).reduce((acc, qty) => acc += qty, 0);
  return (
    <NavIcon onClick={() => dispatch(toggleCartDisplay())}>
        <HiOutlineShoppingCart />
        <span>{cartAddedCount}</span>
    </NavIcon>
  )
}

export default CartIcon