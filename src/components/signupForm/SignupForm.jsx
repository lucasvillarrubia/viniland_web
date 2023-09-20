import React from 'react'
import { SignupFormUI, SignupSubmit, SignupCheckbox, SignupNewsletter } from './SignupFormStyles'

const SignupForm = () => {
        return (
                <SignupFormUI>
                        <div>
                                <label>Nombre completo</label>
                                <input type="text" id="correo_inicio" />
                        </div>
                        <div>
                                <label>Correo electrónico</label>
                                <input type="email" id="contrasenia_inicio" />
                        </div>
                        <div>
                                <label>Creá una contraseña</label>
                                <input type="password" id="contrasenia_inicio" />
                        </div>
                        <div>
                                <label>Repetí la contraseña</label>
                                <input type="password" id="contrasenia_inicio" />
                        </div>
                        <div>
                                <SignupNewsletter>Deseo recibir información por correo sobre novedades y promociones</SignupNewsletter>
                                <SignupCheckbox type="checkbox" />
                        </div>
                        <div>
                                <SignupSubmit>Crear Usuario</SignupSubmit>
                        </div>
                </SignupFormUI>
        )
}

export default SignupForm