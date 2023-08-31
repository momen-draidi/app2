import React from 'react'
import axios from  'axios'
import './Mpopular.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'



function MPopuolar() {
 
  

    let [MPopoular,setMPopoular]=useState([]);
      
    let getMPopoular=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setMPopoular(data.results);
    
    }

   useEffect(()=>{
    getMPopoular();
    Aos.init();
   },[]) 
   
  return (
    <>
    <div className="cont "  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" >

    <h1 className='ms-5 h1 mb-5'>Popular Movies</h1>
   
   
   <div className="d-flex container  ">
      <div className="row"  > 
            {MPopoular.map((popular)=>
      
      <div className="col-md-4 w-25 h-25">
    <div class="card  " >
  <img src={`https://image.tmdb.org/t/p/w500/${ popular.poster_path}`} class="card-img-top imgs " alt="..."/>
  <div class="card-body">
    <h5 class="card-text h5">{popular.title}</h5>
    <p className='p'>{popular.release_date}</p>
  </div>
    <div className="link ">
   <Link type='button' className='btn dtn-info btn-outline-danger'   to={`/Details/${popular.id}`}> Details </Link>
    </div>

</div>
   </div>
        
        )}
        
        </div>
        </div>
    
        </div>
    </>
  )
}

export default MPopuolar