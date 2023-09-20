import React from 'react'
import { LoginFormUI, LoginSubmit } from './LoginFormStyles'

const LoginForm = () => {
  return (
        <LoginFormUI>
                <div>
                        <label>Correo</label>
                        <input type="email" id="correo_inicio" />
                </div>
                <div>
                        <label>Contraseña</label>
                        <input type="password" id="contrasenia_inicio" />
                </div>
                <div>
                        <LoginSubmit>Ingresar</LoginSubmit>
                        <a href="#">¿Te olvidaste tu contraseña?</a>
                </div>
        </LoginFormUI>
  )
}

export default LoginForm