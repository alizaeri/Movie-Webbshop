import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Nav from './pages/Nav';
import Checkout from './pages/Checkout';
import Mymovies from './pages/Mymovies';
import Detailview from './pages/Detailview';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/movies" element={<Mymovies/>} />
          <Route path="/movie/:id" element={<Detailview/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;