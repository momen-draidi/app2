import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './detials.css'
import {FcList } from 'react-icons/fc'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'

function Details() {
   let [data,setData1]=useState([])
    let params=useParams()
      let getAllData= async ()=>{

        let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=55c86c2df6b0523ea399340a751adb35`)
      console.log(data)
         setData1(data)
      }
useEffect(()=>{
getAllData();

},[]);
  return (
   <>
   
    <div   style={{backgroundImg:`url('https://image.tmdb.org/t/p/w500/${data.backdrop_path}')`}} className="w-100 max-center" >

  <div className="mt-5 d-flex details "  >
    <div className="col-md-6 h-100 w-50">

  <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} class="card-img-top mt-2 w-50 " alt="img.........???"/>
    </div>
    <div className="col-md-6">
      <div className="h5-1 fs-2"> {data.title}<br/>

      <p className='fs-6 '>{data.release_date}       {data.original_language}</p>
      </div>
  <br/>
  <div className="icon ">
    <i className='icons'><FcList/></i>
    <i className='icons'><AiFillHeart/></i>
    <i className='icons'><AiFillStar/></i>
    <i className='icons'><BsFillBookmarkStarFill/></i>
  </div>
  <div className="p1"><h6>Overview :</h6> {data.overview}</div>
   </div>
 

    </div>
      
  </div>
      
   

   </>
)
}

export default Details