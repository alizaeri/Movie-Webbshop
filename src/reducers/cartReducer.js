import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    movies: []
}

const addToCart = createAction('add movie cart');
const removeFromCart = createAction('remove movie from cart');
const checkout = createAction('do checkout');
const actions = {addToCart, removeFromCart, checkout };


function movieExistsInCart(movies, movie){
    if(movies.find(m => m.id === movie.id) === undefined){
        return false
    }
    return true
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
        return {...state, count: action.payload}
    },
    [checkout] : (state, action) => (
        initialState
    )
    
});

export {actions, reducer};