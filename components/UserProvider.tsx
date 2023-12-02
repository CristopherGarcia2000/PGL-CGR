import React, { useState } from "react";
import { userContext,userContextType } from "./UserContext";

type UserProviderProps = {
    children: JSX.Element | JSX.Element[]
  }
  
  const UserProvider = (props: UserProviderProps) => {
  
    const { children } = props;

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user,setUser] = useState('')

    const toggleIsLoggedIn = () => {
        setIsLoggedIn(true)
    }
    const handleUser = (introducedUser:string) => {
        setUser(introducedUser)
    }

    const defaultValue: userContextType = {
        user,
        handleUser,
        isLoggedIn,
        toggleIsLoggedIn
    }
    return (
        <userContext.Provider value={defaultValue}>
          {children}
        </userContext.Provider>
      )
}
export default UserProvider;