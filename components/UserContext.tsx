import React from 'react'
import { Login, LoginResponse, Register } from '../types/UserTypes';

type userContextType = {
  user: Register,
  handleUser: Function,
  loginUser: Login,
  handleLoginUser:Function,
  loginResponse:LoginResponse,
  handleLoginResponse:Function,  
  isLoggedIn: boolean;
  toggleIsLoggedIn: Function;
}

const userContext = React.createContext({} as userContextType)

export {userContext, userContextType};