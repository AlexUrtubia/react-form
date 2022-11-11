import { createContext, useState, useEffect } from 'react'


export const User = createContext()

export const UserContext = (props) => {

    const [user, setUser] = useState({
        'nombre': '',
        'apellido': '',
        'telefono': '',
        'email': ''
    })
    
    useEffect(() => {
        console.log("cambio desde context",user)
    }, [user])
    


    return (
        <User.Provider value={{user, setUser}}>
            {props.children}
        </User.Provider>
    )
}