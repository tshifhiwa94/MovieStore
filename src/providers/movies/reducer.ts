import {movieActionEnum} from './action';
import { IMovieStateContext } from './context';


export function UserReducer(incomingState: IMovieStateContext , action: ReduxActions.Action<IMovieStateContext >): IMovieStateContext 
{

    const { type, payload } = action;

    switch (type) {
       
        case movieActionEnum.createMovieRequest:
            return {...incomingState,FetchedMovies:[...incomingState?. FetchedMovies, payload.Movie]};
        case movieActionEnum.fetchMoviesRequest:
            return {...incomingState,...payload};
        case movieActionEnum.updateMoviesRequest:
            const filteredMovies=[...incomingState?.FetchedMovies].filter(({id})=>id!==payload.Movie?.id)

            return { ...incomingState, FetchedMovies:[...filteredMovies, payload.Movie]};
        case movieActionEnum.deleteMoviesRequest:
            const filtered=[...incomingState?.FetchedMovies].filter(({id})=>id!==payload.MovieId)
            return { ...incomingState, FetchedMovies:[...filtered]};

         
              
              
        default:
            return incomingState;
    }
}


















   // case movieActionEnum.viewMoviesRequest:
            //     const movieId = payload.Movie; // ID of the movie to view
            //     const movie = incomingState?.FetchedMovies.find(({ id }) => id === movieId?.id );
            //         console.log(movie);
              
            //     return { ...incomingState,  FetchedMovies:[movie]};