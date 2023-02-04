import React from 'react';
import {Routes, Route} from "react-router-dom" 
import './style.css'

import RatingBar from './components/RatingBar/RatingBar'


import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"


export function App(props) {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/start" element={<CategoryPage/>
}/>
      </Routes> 
    </div>
  );
}

// Log to console
console.log('Hello console')