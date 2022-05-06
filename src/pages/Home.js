import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Home() {

  const [movies, setMovies] = useState([])
  const API_URL =  "https://api.themoviedb.org/3"

  const fetchMovies = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: `a7cddb88437f9455b593798fbb4a34fa`
      }
    })
    setMovies(results)
  }
  useEffect(() => {
  fetchMovies()
    }, [ ])

  const rendermovies = () => (
    movies.map(movie => (
      <MovieCard
      key={movie.id}
      movie={movie}
      />
    ))
  )

  return (
    <div className="background">
      <h1>Home Page</h1>
      <div className="container">
        {rendermovies()}
      </div>
    </div>
  )
}
