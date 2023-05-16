import React, { FC, PropsWithChildren, useReducer, useContext,useState,useEffect} from 'react';
import { UserReducer } from './reducer';
import { INITIAL_STATE, IUser,ILogin, UserActionContext, UserContext } from './context';
import { loginUserRequestAction, createUserRequestAction,logOutUserRequestAction } from './action';
import { notification } from 'antd';





const UserProvider: FC<PropsWithChildren> = ({ children }) => {
    
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  







    //create new Movie
    const createUser = async (payload: IUser) => {
        await fetch('https://localhost:44311/api/services/app/Person/Create', {
            method: 'POST',
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(res => {
            res.json().then(data => {
               
                if(res.ok)
                {
                    console.log(data);
                    dispatch(createUserRequestAction(payload));
                    notification.success({
                        message: "Success",
                        description: "New person was registrated successfully",
                      });
                    window.location.href = '/login'; 
                      
                }else{
                    
                    notification.error({
                        message: "error",
                        description: "New person was not registrated successfully",
                      });
                }
               
            })
        })
    }




    const loginUser = async (payload: ILogin) => {
      try {
        const response = await fetch("https://localhost:44311/api/TokenAuth/Authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer <token>" // Replace <token> with the actual token value
          },
          body: JSON.stringify(payload)
        });
    
        if (response.ok) {
          const data =await response.json();
      

         
          dispatch(loginUserRequestAction(data));
          localStorage.setItem('token', data.result.accessToken);
          notification.success({
            message: "Success",
            description: "Login successful",
            
          });
          window.location.href = '/MovieTable';
          
          
        } else {
          notification.error({
            message: "Error",
            description: "Invalid username or password",
          });
        }
      } catch (error) {
        // Remove token from local storage
        notification.error({
          message: "Error",
          description: 'Login failed',
        });
      }
    };
    

   
    //   try {
    //     const response = await fetch("https://localhost:44311/api/TokenAuth/Authenticate", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(payload)
    //     });
    //     console.log(response)
    
    //     if (response.ok) {
    //       const data = await response.json();
    //       localStorage.setItem('token', data.result.accessToken);
    //       dispatch(loginUserRequestAction(data));
    //       notification.success({
    //         message: "Success",
    //         description: "Login successful",
    //       });
    //       window.location.href = '/MovieTable'; 
    //     } else {
    //       notification.error({
    //         message: "Error",
    //         description: "Invalid username or password",
    //       });
    //     }
    //   } catch (error) {
    //     localStorage.removeItem('token'); // Remove token from local storage
    //     notification.error({
    //       message: "Error",
    //       description: 'Login failed',
    //     });
    //   }
    // };
    


  const logOutUser = () => {
    localStorage.removeItem('token');
    localStorage.clear();
  notification.success({
    message: "Success",
    description: "Logout successful",
  });
  window.location.href = '/'; 
}





    return (
        <UserContext.Provider value={state} >
            <UserActionContext.Provider value={{
                loginUser,
                createUser,
                logOutUser
            }}>
                {children}
            </UserActionContext.Provider>
        </UserContext.Provider>
    );
}

function useLoginState() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useAuthState must be used within a Auth Provider");
    }
    return context;
}

function useLoginActions() {
    const context = useContext(UserActionContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a Authoration Provider");
    }
    return context;
}

function useUser() {
    return {
        ...useLoginActions(),
        ...useLoginState()
    }
}
export { UserProvider, useUser };