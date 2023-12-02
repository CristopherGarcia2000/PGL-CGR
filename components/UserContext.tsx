import React from 'react'

type userContextType = {
  user: string,
  handleUser: Function,  
  isLoggedIn: boolean;
  toggleIsLoggedIn: Function;
}

const userContext = React.createContext({} as userContextType)

export {userContext, userContextType};