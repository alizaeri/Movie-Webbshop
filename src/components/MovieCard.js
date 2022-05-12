import React from "react";

import { useDispatch } from "react-redux";
import { actions } from '../reducers/cartReducer';


const MovieCard = ({movie, cart=false}) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(actions.addToCart(movie));
    }
    const handleRemove = () => {
        dispatch(actions.removeFromCart(movie));
    }
  
    const image_path = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="moviediv">
            {movie.poster_path ? <img className='movieimg' src={`${image_path}${movie.poster_path}`} alt="" width="100%" height="auto"/> 
             : null}

            <h4 className="movietitletext" >{movie.title}</h4>
            <button hidden={cart} onClick={ handleAdd }>Add</button>
            <button hidden={!cart} onClick={ handleRemove }>Remove</button>
        </div>
    );
}

export default MovieCard