import React, { useState } from 'react'
import { NavbarUI, NavLogo, NavIcon, NavMenu } from './NavbarStyles'
import { HiOutlineMenu, HiOutlineUser } from 'react-icons/hi';
import CartIcon from '../cart/CartIcon';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import Menu from "../menu/Menu"
import Toolbar from './Toolbar';

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();
  
  return (
    <>
      <NavbarUI>
          <NavLogo src="./logo.png" onClick={() => navigate('/')}/>
          <NavMenu>
            <NavIcon onClick={() => navigate('/login')}><HiOutlineUser /></NavIcon>
            <CartIcon />
            <NavIcon onClick={() => setMenuDisplay(!menuDisplay)}><HiOutlineMenu /></NavIcon>
          </NavMenu>
      </NavbarUI>
      <Cart />
      <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
      <Toolbar menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
    </>
  )
}

export default Navbar