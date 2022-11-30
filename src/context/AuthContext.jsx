import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
   
    const [isLogedIn, setLogedIn] = useState(false);

    const login = ( email, password ) =>  {
        if( email !== 'al-bat-ros@mail.ru' || password !== '123456' ) {
            alert('wrong login or password');
        }  else {
            setLogedIn(true)
        } 
    }
    const logOut = () => setLogedIn(false);

    const providerValue = {
        isLogedIn, logOut, login
    }
    
    return (<>
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
        </>)
}





