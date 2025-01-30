import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div >

      <div className='Navbar'>
      <Link to='/Home'><img style={{marginTop:'15px'}} src="./Images/lakme.webp" alt="" /> </Link>
        <div className='Navicons'> 
        <Link to='/Bag' className='Navicons-image-01'><img  style={{height:"25px",width:'25px'}} src="./Images/bag.png" alt=""/> </Link>
        
        <Link to='/Signin' className='Navicons-image-02'><img  style={{height:"25px",width:'25px'}} src="./Images/user.png" alt=""/></Link>

        <Link to='/search' className='Navicons-image-03'><img style={{height:"25px",width:'25px'}} src="./Images/search.png" alt=""/></Link>

        </div>

        </div>

        <div className='SecNavbar'>

        <div className="Nav-dropdown"> 
          <p className='Nav-p' style={{cursor:'pointer'}}>CATEGORIES🔻</p> 
          <div className="Nav-dropdown-content">
            <Link to='/Lips'>LIPS</Link>
             <Link to='/Eyes'>EYES</Link>
              <Link to='/Face'>FACE</Link>
              <Link to='/Nails'>NAILS</Link>
              <Link to='/Skincare'>SKINCARE</Link>
              <Link to='/Shopbyconcern'>SHOP BY CONCERN</Link>
              {/* <a href=".">COMBOS</a> */}
          </div> 
        </div>

        <div className="Nav-dropdown"> 
          <p className='Nav-p' style={{cursor:'pointer'}}>TRENDING NOW</p> 
          <div className="Nav-dropdown-content">
          </div> 
        </div>

        <div className="Nav-dropdown"> 
          <p className='Nav-p' style={{cursor:'pointer'}}>TRENDS</p> 
          <div className="Nav-dropdown-content">
          </div> 
        </div>

        <div className="Nav-dropdown"> 
          <p className='Nav-p'style={{cursor:'pointer'}}>ORDERS🔻</p> 
          <div className="Nav-dropdown-content">
             <a href=".">TRACK ORDER</a> 
             <a href=".">CANCEL ORDER</a>
          </div> 
        </div>


        <div className="Nav-dropdown"> 
          <p className='Nav-p'style={{cursor:'pointer'}}>HELP🔻</p> 
          <div className="Nav-dropdown-content">
             <a href=".">FAQ</a> 
             <a href=".">JOIN THE CLUB</a>
          </div> 
        </div>


        <div className="Nav-dropdown"> 
        <Link to='/Wishlist'><p className='Nav-p'style={{margin:'8px 0px 0px 0px'}}>MY WISHLIST</p></Link> 
          <div className="Nav-dropdown-content">
          </div> 
        </div>

        </div>
      
    </div>
  )
}
