import { Register } from "../types/UserTypes"
import { postRegister } from "./RequestService"

const USER_IP_API = "http://192.168.1.38" //Usar la IP del internet de mi ordenador
const USER_PORT_API = ":8888"
const USER_API = "/users/"
const USER_REGISTER_API = "register"
const USER_LOGIN_API = "login"
const USER_LOGOUT_API = "logout"

export const postRegisteredUser = async(RegisteredUser:Register) => {
    const response = await postRegister(`${USER_IP_API}${USER_PORT_API}${USER_API}${USER_REGISTER_API}`,RegisteredUser)
    if (response.status == 201) {
        return response.json()
    } else {
        return null
    }   
}

