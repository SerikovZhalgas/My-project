import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div >
                <NavLink to={'/login'}>Login</NavLink>
            </div>
            <div>
                <NavLink to={'/registration'}>Registration</NavLink>
            </div>
            <div>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/password-recovery'}>Password Recovery</NavLink>
            </div>
            <div>
                <NavLink to={'/add-new-password'}>Add new password</NavLink>
            </div>
            <div>
                <NavLink to={'/test'}>Test</NavLink>
            </div>
        </div>
    )
}
