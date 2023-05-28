import React from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
function Tpopouler() {
  let [Tpopouler,setTpopouler]=useState([]);
      
  let getTpopouler=async ()=>{

      let {data}=await axios.get(` https://api.themoviedb.org/3/tv/popular?api_key=55c86c2df6b0523ea399340a751adb35`)
      
     setTpopouler(data.results);
  
  }

 useEffect(()=>{
  getTpopouler();
 },[])
  return (


    <>
    <div className="cont container">

    <h1 className='ms-5 p5 h1 my-5'>Popular TV Shows</h1>
    
   
    
    <div className="d-flex ">
       <div className="row"> 
             {Tpopouler.map((Tp)=>
       
         <div className="col-md-4 w-25 h-25">
     <div class="card " >
   <img src={`https://image.tmdb.org/t/p/w500/${Tp.poster_path}`} class="card-img-top" alt="..."/>
   <div class="card-body">
     <h5 class="card-text">{Tp.original_name}</h5>
     <p>{Tp.first_air_date}</p>
   </div>
     <div className="link">
     <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${Tp.id}`}> Details </Link>
     </div>

 </div>
    </div>
         
         )} </div>
         </div>
         </div>
     
     </>
   )
  
}

export default Tpopouler