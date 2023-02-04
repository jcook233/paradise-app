import React from 'react';
import {Routes, Route} from "react-router-dom" 
import './style.css'

import NavBar from './components/NavBar/NavBar'

import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import ResultsPage from "./pages/ResultsPage"

export function App(props) {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/start" element={<CategoryPage/>
}/>
        <Route path="/results" element={<ResultsPage/>}/>
      </Routes> 
    </div>
  );
}

// Log to console
console.log('Hello console')