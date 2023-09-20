import React from 'react'
import { ToolbarUI, NavIcon } from './NavbarStyles'
import { HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import CartIcon from '../cart/CartIcon';
import { useNavigate } from 'react-router-dom';


const Toolbar = ({ menuDisplay, setMenuDisplay }) => {
  const navigate = useNavigate();
  return (
        <ToolbarUI>
                <CartIcon />
                <NavIcon onClick={() => navigate('/login')}><HiOutlineUser /></NavIcon>
                <NavIcon onClick={() => navigate('/')}><HiOutlineHome /></NavIcon>
                <NavIcon><HiOutlineSearch /></NavIcon>
                <NavIcon onClick={() => setMenuDisplay(!menuDisplay)}><HiOutlineMenu /></NavIcon>
        </ToolbarUI>
  )
}

export default Toolbar


