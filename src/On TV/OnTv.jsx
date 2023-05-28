import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import './ontv.css'
function OnTv() {
    let [OnTv,setOnTv]=useState([]);
      
    let getOnTv=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/tv/on_the_air?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setOnTv(data.results);
    
    }

   useEffect(()=>{
    getOnTv();
   },[])

  return (
    <>
  

    <div className="cont  ">

    <h1 className='ms-5 my-5  h1 '>Currently Airing TV Shows</h1>
    
   
    
   <div className="d-flex container">
      <div className="row"> 
            {OnTv.map((Tv)=>
      
      <div className="col-md-4 w-25 h-25">
    <div class="card " >
  <img src={`https://image.tmdb.org/t/p/w500/${Tv.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{Tv.original_name}</h5>
    <p>{Tv.first_air_date}</p>
  </div>
    <div className="link">
    <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${Tv.id}`}> Details </Link>
    </div>
</div>
   </div>
        
        )} </div>
        </div>
        </div>
        
    
    </>
  )}
export default OnTv