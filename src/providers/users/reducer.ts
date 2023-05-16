
import { UserActionEnum } from "./action";
import { IUserStateContext } from "./context";




export function UserReducer(incomingState: IUserStateContext, action: ReduxActions.Action<IUserStateContext>): IUserStateContext 
{

    const { type, payload } = action;

    switch (type) {
       
        case UserActionEnum.createUserRequest:
            return {...incomingState,...payload};
        case UserActionEnum.loginUserRequest:
            return {...incomingState,...payload};
        default:
            return incomingState;
    }
}