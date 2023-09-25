import React from 'react'
import { ErrorMessage, Field } from 'formik';
import { VerifyLabel, VerifyInputStyled, ErrorMessageUI } from './VerifyFormStyles';

const VerifyInput = ({ children, htmlFor, type, id, placeholder, name }) => {
        return (
                <Field name={name}>
                        {({ field, form: { errors, touched } }) => (
                                <div>
                                        <VerifyLabel htmlFor={htmlFor}>{children}</VerifyLabel>
                                        <VerifyInputStyled
                                                type={type}
                                                id={id}
                                                placeholder={placeholder}
                                                {...field}
                                                erroneous={errors[field.name] && touched[field.name]}
                                        ></VerifyInputStyled>
                                        <ErrorMessage name={field.name}>
                                                {message => <ErrorMessageUI>{message}</ErrorMessageUI>}
                                        </ErrorMessage>
                                </div>
                        )}
                </Field>
        )
}

export default VerifyInput