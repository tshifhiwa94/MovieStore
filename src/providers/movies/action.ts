import {createAction} from 'redux-actions';
import { IMovieStateContext } from './context';
import { IMovie } from './context';


export enum movieActionEnum{
    createMovieRequest = 'CREATE',
    fetchMoviesRequest ='GETALL',
    updateMoviesRequest ='UPDATE',
    deleteMoviesRequest ='DELETE',
    //viewMoviesRequest ='GETMOVIE',

}

export const createMovieRequestAction=createAction<IMovieStateContext,IMovie>(movieActionEnum.createMovieRequest,(Movie)=>({Movie}))
export const  fetchMoviesRequestAction=createAction<IMovieStateContext,IMovie[]>(movieActionEnum.fetchMoviesRequest,(FetchedMovies)=>({FetchedMovies}))
export const  updateMoviesRequestAction=createAction<IMovieStateContext,IMovie>(movieActionEnum.updateMoviesRequest,(Movie)=>({Movie}))
export const  deleteMoviesRequestAction=createAction<IMovieStateContext,string>(movieActionEnum.deleteMoviesRequest,(MovieId)=>({MovieId}))
//export const  viewMoviesRequestAction=createAction<IMovieStateContext,IMovie>(movieActionEnum.viewMoviesRequest,(Movie)=>({Movie}))