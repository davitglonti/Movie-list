import React from 'react'
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Popular from './component/Popular';
import Top from './component/Top'
import MovieDetal from './component/MovieDetal';
import Upcoming from './component/Upcoming';

import MovieList from './component/MovieList';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="/Top" element={<Top/>}/>
      <Route path="/Upcoming" element={<Upcoming/>}/>
      <Route path="MovieDetal/:id" element={<MovieDetal/>}/>
      <Route path="/movies/:type" element={<MovieList/>}/>
      
    
    </Routes>
  
    </Router>
    </div>
  );
}

export default App;
