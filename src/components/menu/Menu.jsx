import React from 'react'
import { MenuBG, MenuUI, MenuExit } from './MenuStyles'

const Menu = ({ menuDisplay, setMenuDisplay }) => {
        return (
                <>
                        {(menuDisplay) && 
                                <MenuBG onClick={() => setMenuDisplay(!menuDisplay)}></MenuBG>
                        }
                        {(menuDisplay) && 
                                <MenuUI>
                                        <MenuExit onClick={() => setMenuDisplay(!menuDisplay)}>X</MenuExit>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Categorias</a></li>
                                        <li><a href="#">Productos</a></li>
                                        <li><a href="#">Contacto</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Iniciar Sesión</a></li>
                                        <li><a href="#">Registrarse</a></li>
                                </MenuUI>
                        }
                </>
        )
}

export default Menu