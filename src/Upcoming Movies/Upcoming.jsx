import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom'

import {useState,useEffect} from 'react'
function Upcoming() {
    let [Upcoming,setUpcoming]=useState([]);
      
    let getUpcoming=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setUpcoming(data.results);
    
    }

   useEffect(()=>{
    getUpcoming();
   },[])

  return (

    <>,
    <div className="container">

   
    <h1 className='h1 my-5 container mt-5'>Upcoming Movies</h1>
    <div className="d-flex " id='o'>
      <div className="row"> 
            {Upcoming.map((upcoming)=>
      
        <div className="col-md-4 w-25 h-25">
    <div class="card  " >
  <img src={`https://image.tmdb.org/t/p/w500/${upcoming.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{upcoming.title}</h5>
    <p>{upcoming.release_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${upcoming.id}`}> Details </Link>
    </div>

</div>
   </div>
        
    )} </div>
        </div> </div>
    
    
    </>
  )
}

export default Upcoming