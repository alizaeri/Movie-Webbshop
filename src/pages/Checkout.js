import React from 'react';
import '../App.css';
import {useSelector } from "react-redux";

export default function Checkout() {
    const value = useSelector( state => state.cart.count);
    return (
        <div>
            <h1>Cart items: {value}</h1>
            <h1 className='aligncenter'>
                Checkout route
            </h1>
        </div>
    );
}


