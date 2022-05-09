import React, { useState } from 'react';
import '../App.css';
import { useEffect } from "react";
import axios from "axios";
import MovieCard from '../components/MovieCard';

function Search() {

const [movies, setMovies] = useState([])
const [searchkey, setsearchkey] = useState("")
const API_URL =  "https://api.themoviedb.org/3"

const fetchsearchedtitle = async (searchkey) => {
  const type = searchkey ? "search" : "discover"

  const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: `a7cddb88437f9455b593798fbb4a34fa`,
      query: searchkey
    }
  })
  setMovies(results)
}

const rendermovies = () => (
  movies.map(movie => (
    <MovieCard
    key={movie.id}
    movie={movie}
    />
  ))
)

const searchmovie = (e) => {
  e.preventDefault()
  fetchsearchedtitle(searchkey)
}


    return (
      <div className='backgroundvh' style={{textAlign: 'center'}}>
        <form onSubmit={searchmovie}>
          <input onChange={(e) => setsearchkey(e.target.value)} type="text" placeholder="Search here..." className='Searchinput'/>
        </form>
        <div className="container2">
          {rendermovies()}
        </div>
      </div>
    );
}
export default Search;