import React from 'react'
import styled from 'styled-components';

function NavBar() {
    return (
        <Nav>
            Nav bar Location
        </Nav>

    )
}

export default NavBar

const Nav = styled.div`
    display: flex;
    height: 30px;
    background-color: #232F3E;    
    align-items: center;
    justify-content: center;
    color: white;
`