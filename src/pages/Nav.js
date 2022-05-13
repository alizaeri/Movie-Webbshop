import React from 'react';
import '../App.css';
import Homebtnimage from '../images/Homebtn.png';
import Searchbtnimage from '../images/Searchbtn.png';
import Checkoutbtnimage from '../images/Checkoutbtn.png';
import Mymoviesbtn from '../images/Mymoviesbtn.png'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
      <div className='Navbar'>
        <Link to="/">
           <img className='Homebtncss' src={Homebtnimage} alt=''></img>
        </Link >
        <Link to="/search">
           <img className='Searchbtncss' src={Searchbtnimage} alt=''></img>
        </Link >
        <Link to="/checkout">
           <img className='Checkoutbtncss' src={Checkoutbtnimage} alt=''></img>
        </Link >
        <Link to="/movies">
           <img className='Mymoviesbtncss' src={Mymoviesbtn} alt=''></img>
        </Link >
      </div>
  );
}
export default Nav;
