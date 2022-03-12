import React from 'react'
import './Infosite.css'
import logo from './logo.svg';
import Section from './Section/Section'


const infoSite = () => {
    return (
        <div>
            <header className="header">
                <div className="content">
                    <img src={logo} alt="logo" class="logo" />
                    <h1 className='title'>ReactFacts</h1>
                </div>
                <nav>
                    <ul class="navli">
                        <li>React Course - </li>
                        <li>Project 1</li>
                    </ul>
                </nav>
            </header>
            <Section />
        </div>


    )
}


export default infoSite