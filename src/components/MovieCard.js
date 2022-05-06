import React from "react";

const MovieCard = ({movie}) => {
    const image_path = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="movieimage">
            {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} alt="" width="100%" height="auto"/> 
             : null}
            

            <h4>{movie.title}</h4>
        </div>
    );
}

export default MovieCard;