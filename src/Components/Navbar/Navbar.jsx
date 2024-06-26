import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p>SHOPPER</p>
        </div>        
        <ul className="nav-menu">
        <li>Shop<hr/></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar   
