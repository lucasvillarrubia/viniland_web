import React, { useEffect } from 'react'
import { Form, Formik, SignupSubmit } from './SignupFormStyles'
import { signupInitialValues } from '../../formik/initialValues'
import { signupValidationSchema } from '../../formik/validationSchema'
import SignupInput from './SignupInput'
import { createUser } from '../../features/users/usersAPI'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../features/users/usersSlice'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const { currentUser } = useSelector(state => state.users);
        useEffect(() => { if (currentUser) { navigate('./') } }, [navigate, currentUser]);
        
        return (
                <Formik 
                        initialValues={signupInitialValues}
                        validationSchema={signupValidationSchema} 
                        onSubmit={
                                async (values, actions) => {
                                        const user = await createUser(values.name, values.email, values.password);
                                        actions.resetForm();
                                        if (user) { dispatch(setCurrentUser({ ...user.user, token: user.token })) }
                                }
                        }
                >
                        <Form>
                                <SignupInput name='name' type='text' id='nombre' htmlFor='nombre' placeholder='Tu nombre'>
                                        Nombre completo
                                </SignupInput>
                                <SignupInput name='email' type='email' id='correo' htmlFor='correo' placeholder='Tu correo'>
                                        Correo electrónico
                                </SignupInput>
                                <SignupInput name='password' type='password' id='contrasenia' htmlFor='contrasenia' placeholder='Tu nueva contraseña'>
                                        Creá una contraseña
                                </SignupInput>
                                {/* <SignupInput name='location' type='text' id='localidad' htmlFor='localidad' placeholder='Tu localidad'>
                                        Repetí la contraseña
                                </SignupInput> */}
                                {/* <div>
                                        <SignupNewsletter>Deseo recibir información por correo sobre novedades y promociones</SignupNewsletter>
                                        <SignupCheckbox type="checkbox" />
                                </div> */}
                                <SignupSubmit type='submit'>Crear usuario</SignupSubmit>
                        </Form>
                </Formik>
        )
}

export default SignupForm