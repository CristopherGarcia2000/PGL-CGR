import React, { useState } from "react";
import { userContext,userContextType } from "./UserContext";
import { postRegisteredUser } from "../services/UserLoginService";
import { Login, LoginResponse, Register } from "../types/UserTypes";

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
    const [loginUser,setLoginUser] = useState<Login>({
      name:'',
      password:'',
    })
    const [loginResponse,setLoginResponse] = useState<LoginResponse>({
      name:'',
      email:''
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
    const handleLoginUser = (loginUser:Login) => {
      setLoginUser({
        name:loginUser.name,
        password:loginUser.password
      })
  }
    const handleLoginResponse = (loginResponse:LoginResponse) => {
      setLoginResponse({
        name:loginResponse.name,
        email:loginResponse.email
      })
    }

    const defaultValue: userContextType = {
        user,
        handleUser,
        loginUser,
        handleLoginUser,
        loginResponse,
        handleLoginResponse,
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