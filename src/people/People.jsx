import React from 'react'
import axios from  'axios'
import {useState,useEffect} from 'react'
function People() {
    let [People,setPeople]=useState([]);
      
    let getPeople=async ()=>{

        let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setPeople(data.results);
    
    }

   useEffect(()=>{
    getPeople();
   },[])

  return (
    <>
    <div className="container">

    <h1 className='ms-3 my-5 h1 '>Popular People </h1>
    
   
    
   <div className="d-flex ">
      <div className="row"> 
            {People.map((Peopl)=>
      
      <div className="col-md-4 w-25 h-25">
    <div class="card " >
  <img src={`https://image.tmdb.org/t/p/w500/${Peopl.poster_path}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{Peopl.original_title}</h5>
    <p>{Peopl.release_date}</p>
  </div>
</div>
   </div>
        
        )} </div>
        </div>
        </div>
    
    </>
  )}

export default People