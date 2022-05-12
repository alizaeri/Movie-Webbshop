import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Search from './pages/Search';
import Nav from './pages/Nav';
import Checkout from './pages/Checkout';
import Mymovies from './pages/Mymovies';
import Detailview from './pages/Detailview';

import {setWithExpiry, getWithExpiry} from './util/storage'

export default function App() {
  const [movies, setMovies] = useState([])
  const [debug, setDebug] = useState(true)
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
      let res

      if(debug === true){
        res = await apiLocal.get('movies.json').then(res => res)
      }else{
        res = await api.get('/discover/movie').then(res => res)
      }
      
      setMovies(res.data)
    }catch(err){
      console.log('Failed getting data: '+ err)
    } 
  }

  useEffect(() => {
    const storedMovies = getWithExpiry(LOCAL_STORAGE_KEY)//JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedMovies){ 
      console.log("Have data in localstorage, using it!")
      setMovies(storedMovies)
    } else {
      console.log("No data, go fetch it")
      fetchMovies()
    }
  }, [])

  useEffect(() => {
    setWithExpiry(LOCAL_STORAGE_KEY, movies, 30000) //TTL 30 sec
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
          <Route path="/movie/:id" element={<Detailview/>} />
        </Routes>
      </div>
    </Router>
  );
}
