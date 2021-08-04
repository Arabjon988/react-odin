import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Image/GOOGLE.png'

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                <img src={logo} alt="logo" className='logo' />
                    <ul className='collect'>
                        <li><NavLink className='collection' to='/' exact>Home</NavLink></li>
                        <li><NavLink className='collection' to='/about' exact>About</NavLink></li>
                        <li><NavLink className='collection' to='/contact' exact>Contact</NavLink></li>
                        <li><NavLink className='collection' to='/services' exact>Services</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
