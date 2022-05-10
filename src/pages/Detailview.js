import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



export const Detailview = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchMovieDetails(id)
          }, [])
    
    const fetchMovieDetails = async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a7cddb88437f9455b593798fbb4a34fa`);
        const data = response.data;
        console.log(data);
        setMovie(data);
    }

       
  return (
    <h1>{movie.title}</h1>
  )
}

export default Detailview;
