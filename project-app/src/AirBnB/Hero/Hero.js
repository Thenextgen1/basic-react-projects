import React from 'react'
import './Hero.css'
import logo from './hero.png'

const hero = () => {
    return (
        <section className='hero'>
            <img className="hero-logo" src={logo} alt="hero-logo" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}

export default hero;