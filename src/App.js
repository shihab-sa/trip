import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Blog from './components/Blog/Blog';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path='/home' element={<Home/>}/>
      <Route  path='/blog' element={<Blog/>}  />
      
    </Routes>
      
    </>
  );
}

export default App;
