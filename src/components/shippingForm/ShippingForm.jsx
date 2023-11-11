import React from 'react'
import { Form, Formik, ShippingSubmit } from './ShippingFormStyles'
import { checkoutInitialValues } from '../../formik/initialValues'
import { checkoutValidationSchema } from '../../formik/validationSchema'
import ShippingInput from './ShippingInput'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder, getOrders } from '../../features/orders/ordersAPI'
import { cleanCart } from '../../features/cart/cartSlice'

const ShippingForm = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { cartItems, shippingCost } = useSelector(state => state.cart);
        const { currentUser } = useSelector(state => state.users);
        const { orders } = useSelector(state => state.orders);
        const orderItems = cartItems.map(product => {
                const { name, id, price, xAdded, author } = product;
                return ({ name, id, price, xAdded, author });
        });
        const cartTotalCost = cartItems
                .map(product => product.xAdded * product.price)
                .reduce((acc, qty) => acc += qty, 0);
        const orderPrice = cartTotalCost + shippingCost;
        return (
                <Formik 
                        initialValues={checkoutInitialValues}
                        validationSchema={checkoutValidationSchema}
                        onSubmit={
                                async values => {
                                        if (!currentUser.verified) {
                                                alert("Primero tenés que verificar tu cuenta para realizar una orden");
                                                navigate('/verify');
                                                return;
                                        }
                                        const orderData = {
                                                items: orderItems,
                                                price: cartTotalCost,
                                                shippingCost,
                                                total: orderPrice,
                                                shippingDetails: { ...values }
                                        }
                                        try {
                                                await createOrder(dispatch, currentUser, orderData);
                                                dispatch(cleanCart());
                                                await getOrders(dispatch, currentUser);
                                                navigate('/congratulations');
                                        } catch (error) {
                                                alert('No se pudo crear la orden');
                                        }
                                }
                        }
                >
                        {({isSubmitting}) => (
                                <Form>
                                        <ShippingInput name='name' type='text' id='nombre' htmlFor='nombre' placeholder='Tu nombre completo'>
                                                Nombre
                                        </ShippingInput>
                                        <ShippingInput name='address' type='text' id='direccion' htmlFor='direccion' placeholder='Tu dirección'>
                                                Direccion
                                        </ShippingInput>
                                        <ShippingInput name='location' type='text' id='localidad' htmlFor='localidad' placeholder='Tu localidad'>
                                                Localidad
                                        </ShippingInput>
                                        <ShippingInput name='phone' type='text' id='telefono' htmlFor='telefono' placeholder='Tu teléfono'>
                                                Teléfono
                                        </ShippingInput>
                                        <ShippingSubmit type='submit' disabled={!cartItems.length || isSubmitting}>Continuar al pago</ShippingSubmit>
                                </Form>
                        )}
                </Formik>
        )
}

export default ShippingForm