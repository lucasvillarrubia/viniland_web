import React from 'react'
import { VerifySubmit, Formik, Form } from './VerifyFormStyles'
import { verifyValidationSchema } from '../../formik/validationSchema'
import { verifyInitialValues } from '../../formik/initialValues'
import VerifyInput from './VerifyInput'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../../features/users/usersAPI'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../features/users/usersSlice'

const VerifyForm = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        return (
                <Formik
                        initialValues={verifyInitialValues}
                        validationSchema={verifyValidationSchema}
                        onSubmit={async (values) => {
                                        const result = await verifyUser(values.email, values.code);
                                        if (result) {
                                                alert(result.msg);
                                                dispatch(setCurrentUser(null));
                                                navigate('/login');
                                        }
                                }
                        }
                >
                        <Form>
                                <VerifyInput name='email' type='email' id='correo' htmlFor='correo' placeholder='Ingresá tu correo nuevamente'>
                                        Correo
                                </VerifyInput>
                                <VerifyInput name='code' type='text' id='codigo' htmlFor='codigo' placeholder='Tu código de verificación'>
                                        Código de Verificación
                                </VerifyInput>
                                {/* <div>
                                        <a href="#">¿Te olvidaste tu contraseña?</a>
                                </div> */}
                                <VerifySubmit type='submit'>Validar código</VerifySubmit>
                        </Form>
                </Formik>
        )
}

export default VerifyForm