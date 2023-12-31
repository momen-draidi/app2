import React from 'react'
import MPopuolar from '../popoular/MPopuolar'
import Trinding from '../Trainding/Trinding'
import './header.css'
import {FiSearch} from 'react-icons/fi'

function Header() {
 
  return (
    
<>
     
    <header className='header ' >
    <h1 className='text-white fs-2 pt-5 ps-5 h1'>Welcome. <br/> Millions of movies, TV shows<br/> and people to discover. Explore now.
</h1>

<form className="d-flex form container pb-5" role="search" >
  <input className="form-control me-2 input   py-2 " type="search" placeholder="Search a movie,"   aria-label="Search" />
  <button className='search'><i><FiSearch/></i></button>
</form>

 

 
    </header>
    <Trinding/>
    <MPopuolar/>
    </>

   
  )
}

export default Header