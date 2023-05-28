import React from 'react'
import {useState,useEffect} from 'react'
import './Trinding.css'
import axios from  'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";
import "swiper/css/pagination";

function Trinding() {
    let [Trainding,setTrainding]=useState([]);
      
    let getTrainding=async ()=>{

        let {data}=await axios.get(` https://api.themoviedb.org/3/trending/all/week?api_key=55c86c2df6b0523ea399340a751adb35`)
        
       setTrainding(data.results);
    
    }
    
    

   useEffect(()=>{
    getTrainding();
   },[])


  return (
<>

<div className=" movie my-5 position-relative  " >
     <h1 class='fs-2 py-3 ms-5 mb-3 h1' >Trending</h1>
     <ul class="nav nav-tabs mx-4 " id="myTab" role="tablist">
  <li class="nav-item  "  role="presentation">
    <button class="nav-link  active  m1 text-dark" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Today</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link  text-dark " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">This Week</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

  <div className=" d-flex container  slid">
  
  <Swiper
     slidesPerView={5}
     spaceBetween={40}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
   >
    {Trainding.map((t)=>
    <SwiperSlide>
     

      <div class="card  " >
      <img src={`https://image.tmdb.org/t/p/w500/${t.poster_path}`} className='h-75 w-100' alt="img" />
  <div class="card-body">
      <h6 className='fs-6 '>{t.original_title}</h6>
      <p className='fs-6'> {t.release_date}</p>
    
  </div>
</div>
      
    </SwiperSlide>
    )}
    


   </Swiper>


  
  </div>
  </div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
     <div className=" d-flex container slid ">
     <Swiper
     slidesPerView={5}
     spaceBetween={40}
     pagination={{

       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
   >
    {Trainding.map((t)=>
    <SwiperSlide>
      <div class="card " >
      <img src={`https://image.tmdb.org/t/p/w500/${t.poster_path}`} className='h-75' alt="img" />
  <div class="card-body m">
      <h5 className='fs-6'>{t.title}</h5>
      <p className='fs-6'> {t.release_date}</p>
    
  </div>
</div>
    </SwiperSlide>
    )}
    


   </Swiper>
  </div>
  </div>
  
</div>
</div>

</> 
 )
}

export default Trinding