import React from 'react'
import { UserMenuBG, UserMenuUI } from './UserStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, toggleUserMenuDisplay } from '../../features/users/usersSlice';

const UserMenu = () => {
        const dispatch = useDispatch();
        const { currentUser, userMenuOnDisplay } = useSelector(state => state.users);
        return (
                <>
                        {(userMenuOnDisplay) && 
                                <UserMenuBG onClick={() => dispatch(toggleUserMenuDisplay())}></UserMenuBG>
                        }
                        {(userMenuOnDisplay) && 
                                <UserMenuUI>
                                        <h6>{`¡Hola ${currentUser?.name}!`}</h6>
                                        <p>Tus ordenes</p>
                                        <p onClick={() => {
                                                        dispatch(setCurrentUser(null));
                                                        dispatch(toggleUserMenuDisplay());
                                                }}
                                        >
                                                Cerrar sesión
                                        </p>
                                </UserMenuUI>
                        }
                </>
        )
}

export default UserMenu