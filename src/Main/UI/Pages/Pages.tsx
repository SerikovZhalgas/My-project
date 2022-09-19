import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import Error404 from "../404/Error404";
import {Login} from "./Components/Auth/Login/Login";
import {Registration} from "./Components/Auth/Registration/Registration";
import {Profile} from "./Components/Profile/Profile";
import {PasswordRecovery} from "./Components/Auth/PasswordRecovery/PasswordRecovery";
import {AddNewPassword} from "./Components/Auth/AddNewPassword/AddNewPassword";
import {Test} from "./Components/Test";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ADD_NEW_PASSWORD: '/add-new-password',
    TEST: '/test',
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/*'} element={<Navigate to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.ADD_NEW_PASSWORD} element={<AddNewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}
