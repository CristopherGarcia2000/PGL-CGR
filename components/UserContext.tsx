import React from 'react'
import { Register } from '../types/UserTypes';

type userContextType = {
  user: Register,
  handleUser: Function,  
  isLoggedIn: boolean;
  toggleIsLoggedIn: Function;
}

const userContext = React.createContext({} as userContextType)

export {userContext, userContextType};