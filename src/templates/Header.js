import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Commun.css';

function Header() {
  return (
    
         <nav className='header-nav'>
<h1><i class="bi bi-bank2"></i></h1>
            <h2>Home First Finance</h2>
            <div className='w-75'><br/>
            <Link className="header-btn" to={'about-us'}>Home</Link>
            <Link className="header-btn"to={'services'}>About-us</Link>
            <Link className="header-btn" to={'best-for-you'}>Contact-us</Link>
            <Link className='header-btn' to={'contact-us'}>Emi-Check</Link>
            <Link className="header-btn" to={'enq'}>Enquiry</Link>
            <Link  className="header-btn" to={'sign-in'}>Login</Link>
            </div>


         </nav>
         
  )
  
}

export default Header