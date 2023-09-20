import React from 'react'
import { LoginBG, LoginText, LoginTitle, LoginButton } from './LoginStyles'
import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
        return (
                <LoginBG>
                        <LoginTitle>INICIAR SESIÓN</LoginTitle>
                        <LoginForm />
                        <LoginText>¿No tenés una cuenta todavía?</LoginText>
                        <LoginButton>Registrate</LoginButton>
                </LoginBG>
        )
}

export default Login