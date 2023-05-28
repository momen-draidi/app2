import React from 'react'
import axios from  'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function AiringToday() {
  let [AiringToday,setAiringToday]=useState([]);
      
    let getAiringToday=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/tv/airing_today?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setAiringToday(data.results);
    
    }

   useEffect(()=>{
    getAiringToday();
   },[])

  return (

    <>
    <div className="cont container ">

    
    <h1 className=' mb-5 h1 '>TV Shows Airing Today   </h1>
    
   
    
   <div className="d-flex ">
      <div className="row"> 
            {AiringToday.map((Airing)=>
      
        <div className="col-md-4 w-25 h-25">
    <div class="card " >
  <img src={`https://image.tmdb.org/t/p/w500/${Airing.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{Airing.original_name}</h5>
    <p>{Airing.first_air_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`Details/${Airing.id}`}> Details </Link>
    </div>
</div>
   </div>
        
    )} </div>
        </div>
    
    </div>
    </>
  )}

export default AiringToday