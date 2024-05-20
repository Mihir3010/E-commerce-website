import React from 'react'
import "../../Styles/succes.css"
import { Link } from 'react-router-dom'

const Succes = () => {
  return (
    
    <div class="container">
    
    <div class="row justify-content-center">
      <div class="col-md-6 mt-4">
      
        <div class="message-box _success">
        <i class="ri-check-line"></i>
          
          <h2> Your payment was successful </h2>
          <p> Thank you for your payment. we will <br/>
            be in contact with more details shortly </p>
            <button className="buy_btn w-95 mt-3" >
            <Link to ='/home'> Return To Home </Link>
          </button>
        </div>
      </div>
    </div>
    <hr/>
  
   
  
  </div>
  )
}

export default Succes
