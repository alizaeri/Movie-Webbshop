import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Nav from './pages/Nav';
import Checkout from './pages/Checkout';
import Mymovies from './pages/Mymovies';

export default function App() {

  const [movies, setMovies] = useState([])
  const API_URL =  "https://api.themoviedb.org/3"

  const LOCAL_STORAGE_KEY = 'MovieWebshopApp.mostpopular'

  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: `a7cddb88437f9455b593798fbb4a34fa`
    }
  })
  const apiLocal = axios.create({
    baseURL: 'static/asset'
  })

  async function fetchMovies() {
    var fetchedMovies = [...movies]
    try {
      //This is a teststubb. Remove further down the line :)
      let res = await apiLocal.get('movies.json').then(res => res)
      //let res = await api.get('/discover/movie').then(res => res)
      setMovies(res.data)
    }catch(err){
      console.log('Failed getting data: '+ err)
    } 
  }

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedMovies){ 
      console.log("Have data in localstorage, using it!")
      setMovies(storedMovies)
    } else {
      console.log("No data, go fetch it")
      fetchMovies()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(movies))
  }, [movies])

  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home movies={movies}/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/movies" element={<Mymovies/>} />
        </Routes>
      </div>
    </Router>
  );
}
