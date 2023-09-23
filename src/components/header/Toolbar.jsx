import React from 'react'
import { ToolbarUI, NavIcon } from './NavbarStyles'
import { HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser } from 'react-icons/hi';
import CartIcon from '../cart/CartIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Toolbar = ({ menuDisplay, setMenuDisplay }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.users);
  return (
        <ToolbarUI>
                <CartIcon />
                <NavIcon onClick={() => currentUser ? dispatch(toggleUserMenuDisplay()) : navigate('/login')}>
                  <HiOutlineUser />
                </NavIcon>
                <NavIcon onClick={() => navigate('/')}><HiOutlineHome /></NavIcon>
                <NavIcon><HiOutlineSearch /></NavIcon>
                <NavIcon onClick={() => setMenuDisplay(!menuDisplay)}><HiOutlineMenu /></NavIcon>
        </ToolbarUI>
  )
}

export default Toolbar


