import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import './nowplaying.css'


function NowPlaying() {
    let [NowPlaying,setNowPlaying]=useState([]);
      
    let getNowPlaying=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setNowPlaying(data.results);
    
    }

   useEffect(()=>{
    getNowPlaying();
   },[])

  return (
<>
    <div className="cont">
    <h1 className='ms-5 my-5 h1 ' >Now Playing Movies</h1>

    
   
    
   <div className="d-flex  container" >
      <div className="row"> 
            {NowPlaying.map((Now)=>
      
        <div className="col-md-4 w-25 h-25">
    <div class="card " >
  <img src={`https://image.tmdb.org/t/p/w500/${Now.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{Now.title}</h5>
    <p>{Now.release_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${Now.id}`}> Details </Link>
    </div>
</div>
   </div>
        
    )} </div>
        </div>
    
    </div>
    </>
  )
}

export default NowPlaying