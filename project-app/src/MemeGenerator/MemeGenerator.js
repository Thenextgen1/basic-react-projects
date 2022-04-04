import React from 'react'
import Navbar from './NavBar/NavBar'
import Memes from './Memes/Memes'
import './MemeGenerator.css'


const MemeGenerator = () => {
    return (
        <div className="memegenerator-container">
            <Navbar />
            <Memes />
        </div>
    )
}

export default MemeGenerator