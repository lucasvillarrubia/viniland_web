import React from 'react'
import { VerifyBG, VerifyText, VerifyTitle } from './VerifyStyles'
import VerifyForm from '../../components/verifyForm/VerifyForm'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
        return (
                <VerifyBG>
                        <VerifyTitle>VERIFICÁ TU CUENTA</VerifyTitle>
                        <VerifyForm />
                        <VerifyText>Ingresá el código que te llegó por correo</VerifyText>
                </VerifyBG>
        )
}

export default Verify