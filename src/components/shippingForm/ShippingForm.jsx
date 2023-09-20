import React from 'react'
import { Form, Formik, ShippingSubmit } from './ShippingFormStyles'
import { checkoutInitialValues } from '../../formik/initialValues'
import { checkoutValidationSchema } from '../../formik/validationSchema'
import ShippingInput from './ShippingInput'

const ShippingForm = ({ cartItems }) => {
        return (
                <Formik initialValues={checkoutInitialValues} validationSchema={checkoutValidationSchema} onSubmit={values => console.log(values)}>
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
                                <ShippingSubmit type='submit' disabled={!cartItems.length}>Continuar al pago</ShippingSubmit>
                        </Form>
                </Formik>
        )
}

export default ShippingForm