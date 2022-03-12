import React from 'react'
import './Navbar.css'
import logo from './logo.png'

const navbar = () => {
    return (
        <nav className='nav'>
            <img className='logo' src={logo} alt="logo" />
        </nav>
    )
}

export default navbar