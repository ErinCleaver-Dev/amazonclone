import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function databaseUpdate() {
    return (
        <Container>
            Update Database
        </Container>
    )
}

export default databaseUpdate

const Container = styled.div`
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    display: grid;
    height: 1000px;
`