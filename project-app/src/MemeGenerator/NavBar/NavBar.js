import React from 'react'
import logo from './Logo.png'
import styled from 'styled-components'

const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em;
background: rgba(127, 45, 157, 0.846);
  `
const style = {
    color: '#FFFFFF'
}


const NavBar = () => {
    return (
        <StyledNav>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <p style={style}>React Project - 4</p>
        </StyledNav>)
}

export default NavBar