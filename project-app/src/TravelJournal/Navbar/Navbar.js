import React from 'react'
import globe from './Fill 213.png'
import styled from 'styled-components';
import './Navbar.css'


const StyledNav = styled.nav`
background: rgba(245, 90, 90, 1);
padding: 1em;
display: flex;
justify-content: center;
align-items: center

`;

const navbar = () => {
    return (
        // <div className="Person" style={style}>
        <StyledNav>
            <img src={globe} alt="globe" />
            <h1>my travel journal</h1>
        </StyledNav>
    );
};


export default navbar
