import AsyncStorage from "@react-native-async-storage/async-storage"
import { Login, Register } from "../types/UserTypes"
import { postLogin, postLogout, postRegister } from "./RequestService"


const USER_IP_API = "http://192.168.1.38" //Usar la IP del internet de mi ordenador
const USER_PORT_API = ":8888"
const USER_API = "/users/"
const USER_REGISTER_API = "register"
const USER_LOGIN_API = "login"
const USER_LOGOUT_API = "logout"

export const postRegisteredUser = async (RegisteredUser: Register) => {
    const response = await postRegister(`${USER_IP_API}${USER_PORT_API}${USER_API}${USER_REGISTER_API}`, RegisteredUser)
    if (response.status == 201) {
        return response.json()
    } else {
        return null
    }
}
export const postLogoutUser = async () => {
    const response = await postLogout(`${USER_IP_API}${USER_PORT_API}${USER_API}${USER_LOGOUT_API}`)
    if (response.status == 200) {
        await AsyncStorage.removeItem('LoginCookie')
        return response.json()
    } else {
        return null
    }
}
export const postLoginUser = async (LoginUser: Login) => {
    const response = await postLogin(`${USER_IP_API}${USER_PORT_API}${USER_API}${USER_LOGIN_API}`, LoginUser)
    if (response.status == 200) {
        const loginCookie = response.headers.get('LoginCookie')
        if (loginCookie) {
            await AsyncStorage.setItem('LoginCokie', loginCookie)
        }
        return response.json()
    } else {
        return null
    }
}

