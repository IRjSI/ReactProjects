import React, { createContext, useEffect, useState } from 'react'
import { getLocalStrg } from '../utilities/LocalStorage'

export const UserContext = createContext()

const ContextProvider = ({ children }) => {

    const [userData,setUserData] = useState(null)

    useEffect( () => {
        const {users} = getLocalStrg()
        setUserData({users})
    },[] )

    return(
        <div>
            <UserContext.Provider value={userData}>
                { children }
            </UserContext.Provider>
        </div>
    )
}

export default ContextProvider
