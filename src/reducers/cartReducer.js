import { createAction, createReducer } from "@reduxjs/toolkit";

//actions
const addToCart = createAction('add movie cart');
const removeFromCart = createAction('remove movie from cart');
const checkout = createAction('do checkout');

const actions = {addToCart, removeFromCart, checkout };

//reducer
const initialState = {
    count: 0
}

const reducer = createReducer(initialState, {
    [addToCart] : (state, action) => ( 
        {...state, count: action.payload }
    ),
    [removeFromCart] : (state, action) => (
        {...state, count: action.payload}
    ),
    [checkout] : (state, action) => (
        initialState
    )
});

export {actions, reducer};