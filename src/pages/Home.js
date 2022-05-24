import React from 'react';
import MovieCard from "../components/MovieCard";

export default function Home({movies, fetchnewgenre}) {

  const rendermovies = () => (
    movies.map(movie => (
      <MovieCard
      add={true}
      key={movie.id}
      movie={movie}
      />
    ))
  )

function changegenre() {
  var genresid = document.getElementById("genres").value;
  console.log(genresid)
  fetchnewgenre(genresid)
  movies.map(movie => (
    <MovieCard
    add={true}
    key={movie.id}
    movie={movie}
    />
  ))
}

  return (
    <div>
      <form>
          <select onChange={changegenre} id="genres" className="category" >
              <option value="">Discover</option>
              <option value="28">Action</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="14">Fantasy</option>
              <option value="27">Horror</option>
              <option value="10749">Romance</option>
              <option value="53">Thriller</option>
          </select>
      </form>
      <div className="container">
        {rendermovies()}
      </div>
     </div>
  )
}
