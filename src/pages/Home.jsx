import React, { useEffect, useState } from 'react';
import MovieCard from "../components/MovieCard";
import Next from '../images/next.png';
import Back from '../images/back.png';
import FirstPage from '../images/firstPage.png';
import Homebtnimage from '../images/Homebtn.png';



export default function Home() {
  const [movies, setMovies]= useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGenre, setCurrentGenre] = useState("")
  let page = currentPage
  
  async function fetchMovies(page="1",genresid=""){
    try{
      const data = await fetch  (`https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&with_genres=${genresid}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`)
      console.log(`https://api.themoviedb.org/3/discover/movie?api_key=de835b19001cc7adb8bbdb742da78711&with_genres=${genresid}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}`)
      const response = await data.json();
      setMovies(response.results);
    
    
    
    }catch(err){
      console.log('Failed getting data: '+ err)

    }
  }
    useEffect(()=> {
      console.log("No data, go fetch it");
      fetchMovies()
    }, [])


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
  setCurrentPage(1)
  var genresid = document.getElementById("genres").value.toString();
  setCurrentGenre(genresid)
  console.log(genresid)
  
  fetchMovies(1,genresid)
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

      <div className="navBtn">
          <img className='firstPage' onClick={
            ()=> {setCurrentPage(1)
           let page = 1 ;
           setCurrentPage(page);
         console.log(currentPage);
         fetchMovies(page.toString(),currentGenre);
          }} src={FirstPage} alt=''></img>
          <img className='back' onClick={
            ()=> {setCurrentPage(currentPage-1)
          let page = currentPage ;
          if (currentPage>1){
            page = currentPage -1 ;
          }
        setCurrentPage(page);
      console.log(currentPage);
        fetchMovies(page.toString());}} src={Back} alt=''></img>
          <img className='next' onClick={ ()=> {
            let page = currentPage +1 ;
            setCurrentPage(page);
          console.log(currentPage);
          fetchMovies(page.toString(),currentGenre);
          }} src={Next} alt=''></img>
         </div>
      
     </div>
  )
}
