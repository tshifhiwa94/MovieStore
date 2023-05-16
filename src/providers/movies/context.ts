
import {createContext} from 'react';


export interface IMovie{
    id?:string;
    title:string,
    starring:string,
    duration:string,
    categoryName?:string
}


export interface IMovieStateContext{
    readonly Movie ?: IMovie,
    readonly FetchedMovies?:IMovie[] ,    //Question?
    readonly MovieId?: string,   //Question?
}

export const INITIAL_STATE:IMovieStateContext={}

export interface IMovieActionsContext{
    createMovie?:(payload:IMovie)=>void;
    fetchMovies:()=>void;
    updateMovie?:(payload:IMovie)=>void;
    deleteMovie?:(payload:string)=>void;
    //viewMovie?:(payload:string)=>void; 
}



const MoviesStateContext =createContext<IMovieStateContext>(INITIAL_STATE);

const MoviesActionContext=createContext<IMovieActionsContext>(undefined);

export {MoviesStateContext, MoviesActionContext};






















// export interface IMovieStateContext{
//     readonly CreateStateMovie ?: IMovie,
//     readonly FetchStateMovies?:IMovie[] ,
//     readonly UpdateStateMovie?:IMovie,      //Question?
//     readonly DeleteStateMovie?: string,   //Question?
//     readonly ViewStateMovie?: IMovie

// }