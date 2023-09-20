import React from 'react'
import { ErrorMessage, Field } from 'formik';
import { ShippingLabel, ShippingInputStyled, ErrorMessageUI } from './ShippingFormStyles';

const ShippingInput = ({ children, htmlFor, type, id, placeholder, name }) => {
        return (
                <Field name={name}>
                        {({ field, form: { errors, touched } }) => (
                        <div>
                                <ShippingLabel htmlFor={htmlFor}>{children}</ShippingLabel>
                                <ShippingInputStyled
                                        type={type}
                                        id={id}
                                        placeholder={placeholder}
                                        {...field}
                                        erroneous={errors[field.name] && touched[field.name]}
                                ></ShippingInputStyled>
                                <ErrorMessage name={field.name}>
                                        {message => <ErrorMessageUI>{message}</ErrorMessageUI>}
                                </ErrorMessage>
                        </div>
                        )}
                </Field>
        )
}

export default ShippingInput