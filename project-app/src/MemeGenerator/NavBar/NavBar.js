import React from 'react'
import logo from './Logo.png'
import styled from 'styled-components'

const StyledNav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;

background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);

  `


const NavBar = () => {
    return (
        <StyledNav>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </StyledNav>)
}

export default NavBar