import React, { createContext, useState, useEffect, useContext } from "react";
import { axiosHelper } from './axiosHelper'
// code for user authentication

const AuthContext = createContext({});


// helper function that exports just the needed / wanted data for the provider
export const AuthHelper = () => {

    const [token, setToken] = useState('')

    // retaining user login information
    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            axiosHelper({
                url: '/api/auth/user',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token: lsToken

            })

            setToken(lsToken)
        }
    }, [])

    function saveUserData(res) {
        console.log("we got the user!", res.data)
    }

    function saveToken(res) {
        const APItoken = res.data.data.token || res.data.access_token;
        setToken(APItoken)
        window.localStorage.setItem('token', APItoken)
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
    }

    function register(registrationData) {
        axiosHelper({
            data: registrationData,
            method: 'post',
            url: '/api/auth/register',
            successMethod: saveToken
        })

    }

    function login(loginData) {
        axiosHelper({
            data: loginData,
            method: 'post',
            url: '/oauth/token',
            successMethod: saveToken
        })
    }

    function logout() {
        axiosHelper({
            url: '/api/auth/logout',
            successMethod: destroyToken,
            token
        })
    }

    // sign up
    // log in
    // getting user information (such as the token, or the userdata)
    // log out

    return { token, register, login, logout }

}

// custom Provider component
export const AuthProvider = (props) => {

    const initialContext = AuthHelper()

    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

// create a custom hook
export const useAuth = () => useContext(AuthContext);

// actual context
export default AuthContext;