import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Detailview.css";


export const Detailview = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const base = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetchMovieDetails(id)
        window.scrollTo(0, 1000)
          }, [])
    
    const fetchMovieDetails = async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a7cddb88437f9455b593798fbb4a34fa`);
        const data = response.data;
        console.log(data);
        setMovie(data);
    }
       
  return (
<div className="detail">
	<div className="detail__left">
				<img
					className="detail__poster"
					src={`${base}${movie.poster_path}`}
					alt="movie"
				/>
	</div>
  

	<div className="detail__right">
		<div className="detail__one">
					<h1 className="detail__title" >
						{movie ? movie.title || movie.name : ""}
					</h1>
					<p className="detail__desc">{movie.overview}</p>
		</div>
            <div className="detail__data">
					<p className="detail__pop">
						Popularity Points : {movie.popularity}
					</p>
					<p className="detail__rating">
						User rating : &nbsp;{`  ${movie.vote_average}/10`}
					</p>
					<p className="detail__raters">
						{" "}
						{movie.vote_count} ratings {" "}
					</p>
					{movie.origin_country ? (
						<p className="detail__country">
							Country : {movie.origin_country}
						</p>
                        ) : (
                            ""
                        )}
                        {movie.runtime && (
                            <p className="detail__country">Run-time : {movie.runtime} mins</p>
                        )}
                        <p className="detail__release">
                            Released On :{" "}
                            {movie.first_air_date || movie.release_date + "  "}
                        </p>
            </div>
                    
    </div>
</div>
                        
  )
}
export default Detailview;
