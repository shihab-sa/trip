import React from 'react'
import { Link}  from 'react-router-dom'


const Navbar=()=>{
    return(
        <>
          <Link to="/blog">Blog</Link>
          <Link to="/home">Home</Link>
        </>
    )
}

export default Navbar