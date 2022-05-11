import React from "react";

import MovieCard from "../components/MovieCard";


import { useDispatch } from "react-redux";
import { actions } from '../reducers/cartReducer';


export default function Home({movies}) {
  const dispatch = useDispatch();

  const handleUpdate = () => {
      dispatch(actions.addToCart(1));
  }

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
      <div className="container">
        {rendermovies()}
      </div>
      <button onClick={ handleUpdate }>Add to cart example, remove</button>
    </div>
  )
}
