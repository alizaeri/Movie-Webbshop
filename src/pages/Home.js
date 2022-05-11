import React from "react";

import MovieCard from "../components/MovieCard";

export default function Home({movies}) {
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
    </div>
  )
}
