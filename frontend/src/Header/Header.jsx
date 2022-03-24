import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";



export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const loggedUser = JSON.parse(
    sessionStorage.getItem('user')
  );

  const handleLogout = e => {
    e.preventDefault();
    sessionStorage.removeItem('user');
    navigate('/');
  }
  

  return (
    <header className='headermain'>
       <h2 className='mainIcon'>MG</h2>

       <nav className={mobile ? 'mobileLinks' : 'desktopLinks'}>
            <Link to='/products'>Products</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            <Link to='/signup'>Join us</Link>
            {
            !loggedUser ?  <Link to='/login'>Login</Link>  :   
            <button className='logoutButton' onClick={handleLogout}>Logout</button>
            }

       </nav>

        <BiMenuAltRight
         onClick={() => setMobile(value => !value)}
         className='menuIcon' size={25} color='#fa8100' />
    </header>
  )
}
