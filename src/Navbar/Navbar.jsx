import React from 'react'
import './Navbar.css'
import { Link  } from 'react-router-dom';
import {Link as LinkRoll} from 'react-scroll';

function Navbar() {
  return (
<>
<nav class="navbar navbar-expand-lg  fixed-top ">
  <div class="container-fluid">
   <LinkRoll className='img '  to="" spy={true} smooth={true} offset={50} duration={-1000000} delay={500}><Link ><img  src="blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"alt="logo" /></Link> </LinkRoll>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link text-white dropdown-toggle fs-5  text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movie
          </Link>
          <ul class="dropdown-menu"> 
            <li><Link class="dropdown-item"  to="populear" >popular</Link></li>
            <li><Link class="dropdown-item" to="n">Now Playing</Link></li>
            <li><Link class="dropdown-item" to="o">Upcoming</Link></li>
            <li><Link class="dropdown-item" to="t">Top Rated</Link></li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link text-white dropdown-toggle fs-5 text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV Shows
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="a">popular</Link></li>
            <li><Link class="dropdown-item" to="b ">On Tv</Link></li>
            <li><Link class="dropdown-item" to="d">Airing Today</Link></li>
            <li><Link class="dropdown-item" to="c">Top Rated</Link></li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <Link class="nav-link text-white dropdown-toggle fs-5 text-dark" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="opp">popular People</Link></li>
            
          </ul>
        </li>
      </ul>
      <div className="me-5 d-flex">
        <li><Link  className='btn btn-outline-danger'>login</Link></li>
         <li><Link className='btn btn-outline-danger'>logout</Link></li>
      </div>
    </div>
  </div>
</nav>


</>
  )
}

export default Navbar