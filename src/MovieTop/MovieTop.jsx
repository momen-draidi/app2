import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
function MovieTop() {
    let [MovieTop,setMovieTop]=useState([]);
      
    let getMovieTop=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/movie/top_rated?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setMovieTop(data.results);
    
    }

   useEffect(()=>{
    getMovieTop();
   },[])

  return (
    <>
    <div className="cont container ">

   
     <h1 className='h1 my-5 '>Top Rated Movies</h1>
    <div className="d-flex ">
      <div className="row"> 
            {MovieTop.map((top)=>
      
        <div className="col-md-4 w-25 h-25">
    <div class="card  " >
  <img src={`https://image.tmdb.org/t/p/w500/${top.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{top.title}</h5>
    <p>{top.release_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${top.id}`}> Details </Link>
    </div>
</div>
   </div>
        
    )} </div>
        </div> </div>
    
    </>
  )
}

export default MovieTop