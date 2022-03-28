import React from 'react';
import marker from './Fill 219.png';
import styled from 'styled-components';
import './Card.css'


const CardSection = styled.section`
  display: flex;
  align-item: center;
margin-top: 4em;
  position: relative;
  justify-content: center;
  overflow-x: hidden;
  left: 25%;

  @media(max-width: 768px) {
      left: 0;
      margin: 1em;
  }
  @media (max-width: 457px) {

    flex-direction: column;
    margin: 2em;
} 

  `

const dynamicStyle = {
    display: 'flex',
    alignItems: 'center'
}
const countryStyle = {
    fontWeight: 400,
    // fontSize: '0.8em',
    color: 'rgba(43, 40, 58, 1)',


}

const detailsStyle = {
    color: 'rgba(43, 40, 58, 1)',
    fontWeight: 400,
    fontSize: '0.8em',
    letterSpacing: '0.8px',
    lineHeight: 1.5,




}

const Card = (props) => {
    return (
        <CardSection>
            <div className='image-container'>
                <img src={props.image} alt={props.name} className="tourist-image" />
            </div>

            <div >
                <div style={dynamicStyle}>
                    <img src={marker} alt="location-marker" className="marker" />
                    <h3 className='country' style={countryStyle}>{props.country}</h3>
                    <a href={props.map} alt="link to destination" className='map'>View on Google Maps</a>
                </div>
                <h2>{props.name}</h2>
                <p className='date'>{props.dateVisited}</p>
                <p className='details' style={detailsStyle}>{props.details}</p>
            </div>
        </CardSection>
    )
}

export default Card