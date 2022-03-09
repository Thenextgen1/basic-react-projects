import React from 'react'
import './BusinessCard.css'
import profilepic from './profilepic.jpg'
import mail from './mail.png'
import Footer from './Footer/Footer'

const businessCard = () => {

    const style = {
        color: "#F3BF99",
        fontSize: "12.8px"
    }

    return (
        <div className="container">
            <img className="profilepic" src={profilepic} alt="profilepic" />
            <h1>Elijah Ohiwerei</h1>
            <p style={style}>Frontend Developer</p>
            <a href="https://elijahohiwerei.netlify.app">elijahO.website</a>
            <div className="email_container">
                <img src={mail} alt="mail" />
                <p><a href="mailto:elijahohiwerei@gmail.com">Email</a></p>
            </div>
            <div className="about_container">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <Footer />

        </div>
    )
}


export default businessCard