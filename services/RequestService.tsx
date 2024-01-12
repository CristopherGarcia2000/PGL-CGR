import { Register } from "../types/UserTypes"

export const postRegister = async (url:string,RegisteredUser:Register) => {
  
    const init:RequestInit = {
        method:'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: RegisteredUser.name,
            email: RegisteredUser.email,
            password: RegisteredUser.password
          }),  
    }
     const response = await fetch(url,init)
     return response
}