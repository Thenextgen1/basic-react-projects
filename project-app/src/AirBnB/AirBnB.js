import React from 'react';
import './AirBnB.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Card from './Card/Card'


const airBnB = () => {
    return (
        <div className="airbnb_container">
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}

export default airBnB