import React from 'react'
import {Link } from 'react-router-dom'
import {HiClock } from 'react-icons/hi'
import './Navbar.css'

const Navbar=()=>{
    return(
        <>
             <div className='nav__section__info'>
             <div>
                <Link to="/home"><HiClock className='logo'/></Link>
             </div>
            
             <div className='nav__link'>
               <div className='home__color'>
               <Link to="/home">Home</Link>
               </div>
               <div className='blog__color'>
               <Link to="/blog">Blog</Link>
               </div>
             </div>
             </div>
              
        </>
    )
}

export default Navbar