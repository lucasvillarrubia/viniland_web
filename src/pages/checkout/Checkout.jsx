import React from 'react'
import UserInfo from '../../components/userInfo/UserInfo'
import ShippingForm from '../../components/shippingForm/ShippingForm'
import { CheckoutBG, CheckoutContainer, CheckoutTitle, CheckoutSubtitle, CheckoutInfo } from './CheckoutStyles'
import Purchase from '../../components/purchase/Purchase'
import { useSelector } from 'react-redux'


const Checkout = () => {
        const { cartItems, shippingCost } = useSelector(state => state.cart);

        return (
                <CheckoutBG>
                        <CheckoutTitle>Terminá tu compra</CheckoutTitle>
                        <CheckoutContainer>
                                <Purchase cartItems={cartItems} shippingCost={shippingCost} />
                                <CheckoutInfo>
                                        <CheckoutSubtitle>Revisá tu información personal</CheckoutSubtitle>
                                        <UserInfo />
                                        <CheckoutSubtitle>Completá la información de envío</CheckoutSubtitle>
                                        <ShippingForm cartItems={cartItems} />
                                </CheckoutInfo>
                        </CheckoutContainer>
                </CheckoutBG>
        )
}

export default Checkout