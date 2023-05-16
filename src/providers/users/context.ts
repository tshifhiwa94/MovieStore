import {createContext} from 'react'

export interface IUser{
    id?: string|number,
    username:string,
    name:string,
    surname:string,
    phone:string
    idNumber:string,
    address:string,
    emailAddress:string,
    password:(string|number)
}


export interface ILogin
{
        userNameOrEmailAddress: string,
        password: string,
}

export interface IUserStateContext {
    readonly userCreated?:IUser;
    readonly UserLogin? : ILogin;
    readonly UserLogOut?:IUser;

}
export const INITIAL_STATE:IUserStateContext={}



export interface IUserActionContext{
    createUser?:(payload:IUser) => void;
    loginUser?:(payload:ILogin) => void;
    logOutUser?:() => void;

}

const UserContext = createContext<IUserStateContext>(INITIAL_STATE)
const UserActionContext=createContext<IUserActionContext>({})


export {UserContext,UserActionContext}