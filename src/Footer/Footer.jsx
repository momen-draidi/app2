import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className="footer  ">

    
   <footer className=' px-5 '>

    <div className="row text-white py-5 px-5">
        <div className="col-md-3">
         <img src="blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className='w-25 px-2 ' alt="" />
        </div>
        <div className="col-md-3 ">
            <h4>THE BASICS</h4>
            <h6>About TMDB</h6>
            <h6>Contact Us</h6>
            <h6>Support Forums</h6>
            <h6>System Status</h6>
        </div>
        <div className="col-md-3">
            <h4>GET INVOLVED</h4>
            <h6>Contribution Bible</h6>
            <h6>Add New Movie</h6>
            <h6>Add New TV Show</h6>
            
        </div>
        <div className="col-md-3">
               <h4>COMMUNITY</h4>
               <h6>Guidelines</h6>
               <h6>Discussions</h6>
               <h6>Leaderboard</h6>
               <h6>Twitter</h6>
        </div>
        <div className="col-md-3">
            <h4>LEGAL</h4>
            <h6>Terms of Use</h6>
            <h6>API Terms of Use</h6>
            <h6>Privacy Policy</h6>
        </div>
    </div>
   </footer>
    
    </div>
  )
}

export default Footer