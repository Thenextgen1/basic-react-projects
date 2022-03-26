import React from 'react';
import './AirBnB.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Card from './Card/Card'
//
import DataSet from './data'



const airBnB = () => {

    const cards = DataSet.map((datum) => {
        return (
            <Card
                img={datum.coverImg}
                alt={datum.alt}
                rating={datum.stats.rating}
                contents={datum.title}
                price={datum.price}
                reviewCount={datum.stats.reviewCount}
                location={datum.location} />
        )
    })

    return (
        <div className="airbnb_container">
            <Navbar />
            <Hero />

            <div className="card-container">
                {cards}
                {/* <Card
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
                /> */}
            </div>
        </div>
    )
}

export default airBnB
