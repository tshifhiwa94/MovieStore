import React, { FC, PropsWithChildren, useReducer,useContext} from 'react';
import { MoviesStateContext,MoviesActionContext,INITIAL_STATE, IMovie} from "./context";
import { createMovieRequestAction, fetchMoviesRequestAction,deleteMoviesRequestAction,updateMoviesRequestAction} from './action';
import {UserReducer} from './reducer'
import { notification } from 'antd';
// import { useGet } from "restful-react"



export const MovieProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    //Create the Movie from table and Database
    const createMovie = async(data:IMovie)=>{
     
      const response = await fetch(
        "https://localhost:44311/api/services/app/Movie/Create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(createMovieRequestAction(data.result))
        notification.success({
                      message: "Success",
                      description: "Movie posted successfully!",
                    });
      } else {
        notification.error({
          message: "Error",
          description: "An error occurred. Please try again later.",
        });
      }


    }


      const fetchMovies = async () => {



        const token = localStorage.getItem('token');  
        const url = 'https://localhost:44311/api/services/app/Movie/GetAllAsnyc';
        const requestOptions = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'no-cors',
            'Authorization':`Bearer ${token}`

          }
        };
        await fetch(url, requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              console.log("error");
              throw new Error('Error:');
            }
          })
          .then(data => {
            dispatch(fetchMoviesRequestAction(data.result));
            // notification.success({
            //   message: "Success",
            //   description: "Movies fetched successfully!",
            // });
           

          })
          .catch(error => notification.error({
            message: "Error",
            description: "Got this "+error.message}));
      }




      //Update the Movie from table and Database
       const updateMovie=(data:IMovie)=>{

        fetch("https://localhost:44311/api/services/app/Movie/Update", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
              console.log("Data ", data.result)

            dispatch(updateMoviesRequestAction(data.result));
            notification.success({
              message: "Success",
              description: "Movie added successfully!",
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };


    

      //Delete the Movie from table and Database


      const deleteMovie = (id:string) => {
        //Delete movie from database
        if (!id) {
          notification.error({
            message: "Delete Error",
            description: "Failed to delete movie: Id is empty",
          });

        }
        fetch(`https://localhost:44311/api/services/app/Movie/DeleteAsnyc?id=${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete movie");
            }
            // Update the state of the movies
            dispatch(deleteMoviesRequestAction(id))
            notification.success({
              message: "Delete Success",
              description: "Movie deleted successfully",
            });

          })
          .catch((error) => {
            console.error(error);
            notification.error({
              message: "Delete Error",
              description: "Failed to delete movie: " + error.message,
            });
          });
        
      };
      // console.log("delete",state)
      


    return(
        <>
            <MoviesStateContext.Provider value={state}>
                <MoviesActionContext.Provider value={{createMovie,fetchMovies,deleteMovie,updateMovie}}>
                        {children}
                </MoviesActionContext.Provider>
            </MoviesStateContext.Provider>
        
        
        </>
    )
}



function useMovieState() {
    const context = useContext(MoviesStateContext);
    if (!context) {
      throw new Error("useMovieState must be used within a MovieProvider");
    }
    return context;
  }
  function useMovieAction() {
    const context = useContext(MoviesActionContext);
    if (context === undefined) {
      throw new Error("useMovieState must be used within a MovieProvider");
    }
    return context;
  }
  function useMovie() {
    return {
      ...useMovieState(),
      ...useMovieAction()
    }
  
  }
  
  export { useMovieState,useMovieAction , useMovie};


  function useGet(arg0: { path: string; }): { data: any; } {
    throw new Error('Function not implemented.');
  }

