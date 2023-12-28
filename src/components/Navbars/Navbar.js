import React, { useState } from 'react'
import { FaLinkedin,FaInstagram,FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import { Link } from 'react-router-dom';







const Navbar = () => {

    const [showIcons,setIcons]=useState(false)

  return (
    <>
    <nav className='mainnavbar'>
        <div className="logo">
            <h2>
                <span>R</span>estoneed
            </h2>
        </div>

        {/* menu  link */}

        <div className={
            showIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to="/gallery"> Gallery</Link>
                </li>
                <li>
                <Link to="/contact"> Contact</Link>
                </li>

             
            </ul>
        </div>

        {/* social links  */}

        <div className="social-media ">
            <ul className='socail-apps-for-desktop'>
                <li>
                    <a href="https://www.linkedin.com/in/ajay-morde-931b60207/"> 
                    <FaLinkedin className='linkedin' size={26}/></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/ajay-morde-931b60207/"> 
                    <FaInstagram className='instagram' size={26}/></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/ajay-morde-931b60207/"> 
                    <FaTwitter className='twitter' size={26}/></a>
                </li>

            </ul>
            <div className="hamburger-menu">
                <a href=" #" onClick={() => setIcons(!showIcons)}>
                    <GiHamburgerMenu/>
                </a>

            </div>
        </div>
    </nav>

    
   </>
  )
}

export default Navbar