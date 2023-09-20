import React from 'react'
import { SuccessBG, SuccessButton } from './SuccessStyles' 

const Success = () => {
  return (
    <SuccessBG>
        <p>¡Felicidades! Compra exitosa.</p>
        <SuccessButton>Ir a home</SuccessButton>
        <SuccessButton>Mirá tus pedidos</SuccessButton>
    </SuccessBG>
  )
}

export default Success