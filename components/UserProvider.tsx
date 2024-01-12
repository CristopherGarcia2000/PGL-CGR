import React, { useState } from "react";
import { userContext,userContextType } from "./UserContext";
import { postRegisteredUser } from "../services/UserLoginService";
import { Register } from "../types/UserTypes";

type UserProviderProps = {
    children: JSX.Element | JSX.Element[]
  }
  
  const UserProvider = (props: UserProviderProps) => {
  
    const { children } = props;

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [user,setUser] = useState<Register>({
      name:'',
      email:'',
      password:''
    })
    const toggleIsLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    const handleUser = (registeredUser:Register) => {
        setUser({
          name:registeredUser.name,
          email:registeredUser.email,
          password:registeredUser.password
        })
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