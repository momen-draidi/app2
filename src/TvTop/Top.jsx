import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
function Top() {
    let [Top,setTop]=useState([]);
      
    let getTop=async ()=>{

        let {data}=await axios.get(`  https://api.themoviedb.org/3/tv/top_rated?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setTop(data.results);
    
    }

   useEffect(()=>{
    getTop();
   },[])

  return (
    <>
    <div className="cont container ">

    <h1 className='ms-2 my-5 h1  '>Top Rated TV Shows  </h1>
    
   
    
   <div className="d-flex  ">
      <div className="row"> 
            {Top.map((Top)=>
      
        <div className="col-md-4 w-25 h-25">
    <div class="card " >
  <img src={`https://image.tmdb.org/t/p/w500/${Top.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{Top.original_name}</h5>
    <p>{Top.first_air_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${Top.id}`}> Details </Link>
    </div>
</div>
   </div>
        
    )} </div>
        </div>
    
    </div>
    </>
  )}
export default Top