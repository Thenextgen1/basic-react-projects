import React from 'react';
import './AirBnB.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Card from './Card/Card'
import Athlete from './Card/image 12.png'
import Wed from './Card/wedding-photography 1.png'
import Bike from './Card/mountain-bike 1.png'

const airBnB = () => {
    return (
        <div className="airbnb_container">
            <Navbar />
            <Hero />
            <div className="card-container">
                <Card
                    heading="SOLD OUT"
                    img={Athlete}
                    rating={5.0}
                    content="Life lessons with Katie Zaferes"
                    rate="From $136 / person"
                />
                <Card
                    heading="ONLINE"
                    img={Wed}
                    rating="5.0"
                    content="Learn wedding Photography"
                    rate="From $136 / person"
                />
                <Card
                    heading="ONLINE"
                    rating="5.0"
                    content="Learn wedding Photography"
                    rate="From $136 / person"
                    img={Bike}
                />
            </div>
        </div>
    )
}

export default airBnB