import React from 'react';
import '../App.css';
import {useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function Checkout() {
    const count = useSelector( state => state.cart.count);
    const movies = useSelector( state => state.cart.movies);

    const rendermovies = () => (
        movies.map( element =>
            <MovieCard
                cart={true}
                key={element.id}
                movie={element}/>
                    
      ))

    return (
        <div >
            <h1></h1>
            <h1 className='aligncenter'>
                Cart items: {count}
                {rendermovies()}
            </h1>
   
        </div>
    );
}
