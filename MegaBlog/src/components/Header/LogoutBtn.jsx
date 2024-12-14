import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispath = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispath(logout())
        })
    }
    return (
        <button onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
