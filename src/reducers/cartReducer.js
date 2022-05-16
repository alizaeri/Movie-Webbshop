import { createAction, createReducer } from "@reduxjs/toolkit";
import {setWithExpiry, getWithExpiry, MY_MOVIES_STORAGE_KEY} from '../util/storage'

const initialState = {
    count: 0,
    movies: []
}

const addToCart = createAction('add movie cart');
const removeFromCart = createAction('remove movie from cart');
const pay = createAction('pay')

const actions = {addToCart, removeFromCart, pay};


function movieExistsInCart(movies, movie){
    if(movies.find(m => m.id === movie.id) === undefined){
        return false
    }
    return true
}

function updateMyMovies(movies){
    let myMovies = getWithExpiry(MY_MOVIES_STORAGE_KEY)
    const now = new Date()
    let i = 0

    if(myMovies === null){
        myMovies = []
    }
    
    movies.forEach(element => {
        myMovies = [{date: now.getTime() + i, value: element}, ...myMovies] 
        i++
    })

    setWithExpiry(MY_MOVIES_STORAGE_KEY, myMovies, 0)    
}

const reducer = createReducer(initialState, {
    [addToCart] : (state, action) => { 
        if(!movieExistsInCart(state.movies, action.payload)){
            console.log("Adding movie to cart")
            return  {
                movies: [action.payload,...state.movies],
                count: state.count + 1
            }
        }
    },
    [removeFromCart] : (state, action) => {
        if(movieExistsInCart(state.movies, action.payload)){
            console.log("removing movie from cart")
            return  {
                movies: state.movies.filter(m => m.id !== action.payload.id),
                count: state.count - 1
            }
        }
    },
    [pay] : (state, action) => {
        updateMyMovies(state.movies)
        return initialState
    }
});

export {actions, reducer};
