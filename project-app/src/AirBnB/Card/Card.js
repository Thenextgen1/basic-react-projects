import React from 'react'
import './Card.css'
import Athlete from './image 12.png'
import Wed from './wedding-photography 1.png'
import Bike from './mountain-bike 1.png'


const card = () => {
    return (
        <div className="card-container">
            <div>
                <h3>SOLD OUT</h3>
                <img src={Athlete} alt="Athlete" />
                <p>5.0 <span>(6)<span>.</span> USA</span></p>
                <p>Life lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
            </div>
            <div>
                <h3 className='online'>ONLINE</h3>
                <img src={Wed} alt="Wedding" />
                <p>5.0 <span>(30)<span>.</span> USA</span></p>
                <p>Learn wedding photo</p>
                <p>From $125 / person</p>
            </div>
            <div className='bike-container'>
                <img src={Bike} alt="Bike" />
            </div>
        </div>
    )
}

export default card