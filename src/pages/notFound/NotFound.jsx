import React from 'react'
import { NotFoundBG, NotFoundButton } from './NotFoundStyles' 

const NotFound = () => {
  return (
    <NotFoundBG>
        <p>404: Not Found</p>
        <NotFoundButton>Ir a algún lado</NotFoundButton>
    </NotFoundBG>
  )
}

export default NotFound