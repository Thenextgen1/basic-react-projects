import React from 'react';
import Navbar from './Navbar/Navbar'
import Card from './Card/Card'
import DataSet from './data'
import './TravelJournal.css'

const TravelJournal = () => {
    const cards = DataSet.map((datum) => {
        return (
            <Card
                id={datum.id}
                country={datum.country}
                details={datum.details}
                dateVisited={datum.dateVisited}
                image={datum.image}
                name={datum.name}
                map={datum.map}
            />

        )
    })



    return (
        <div className='travel-container'>
            <Navbar />
            {cards}
        </div>

    )
}

export default TravelJournal