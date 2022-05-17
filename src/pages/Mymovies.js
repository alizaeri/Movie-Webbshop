import React, { useEffect, useState } from 'react';
import '../App.css';
import {getWithExpiry, MY_MOVIES_STORAGE_KEY} from '../util/storage'
import MovieCard from "../components/MovieCard";

function Mymovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const storedMovies = getWithExpiry(MY_MOVIES_STORAGE_KEY)
        if (storedMovies){ 
          setMovies(storedMovies)
        }
      }, [])


    const rendermovies = () => (
        movies.map(movie => (
            <MovieCard
            key={movie.date}
            movie={movie.value}
            />
        ))
    )  
    return (
        <div className="background">
            <div className="container">
                {rendermovies()}
            </div>
       </div>
    );
}
export default Mymovies;
