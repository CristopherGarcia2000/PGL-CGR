export type Register = {
    name:string,
    email:string,
    password:string
}
export type Logout = {
    message:string
}
export type Login = {
    name:string,
    password:string
}
export type LoginResponse = {
    name:string,
    email:string
}