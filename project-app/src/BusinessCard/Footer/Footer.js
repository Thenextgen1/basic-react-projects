import React from 'react'
import './Footer.css'
import facebookIcon from './facebookicon.png'
import githubIcon from './gitHubIcon.png'
import instagramIcon from './instagramIcon.png'
import linkedlnIcon from './linkedinicon.png'
import twitterIcon from './twitterIcon.png'

const footer = () => {
    return (
        <footer>
            <ul>
                <li><img src={facebookIcon} alt="facebook link" /></li>
                <li><img src={githubIcon} alt="github link" /></li>
                <li><img src={instagramIcon} alt="instagram link" /></li>
                <li><img src={linkedlnIcon} alt="linkedln link" /></li>
                <li><img src={twitterIcon} alt="twitter link" /></li>
            </ul>

        </footer>
    )
}

export default footer