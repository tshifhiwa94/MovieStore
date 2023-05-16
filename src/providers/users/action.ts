import {createAction} from 'redux-actions';
import { IUserStateContext } from './context';
import { IUser } from './context';
import { ILogin } from './context';


export enum UserActionEnum{
    createUserRequest = 'CREATE',
    loginUserRequest = 'LOGIN',
    logOutUserRequest = 'LOGOUT',
}


export const createUserRequestAction = createAction<IUserStateContext, IUser>(UserActionEnum.createUserRequest,(userCreated)=>({userCreated}))
export const loginUserRequestAction = createAction<IUserStateContext, ILogin>(UserActionEnum.loginUserRequest,(UserLogin)=>({UserLogin}))
export const logOutUserRequestAction = createAction<IUserStateContext>(UserActionEnum.logOutUserRequest,()=>({}))
