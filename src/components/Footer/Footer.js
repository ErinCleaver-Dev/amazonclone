import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Container>
            <BackToTop>
                back to top
            </BackToTop>
            <SiteMap>
            <AmazonMap>
                <Link to="/databaseUpdate">
                    Update Database
                </Link>
            </AmazonMap>
            <AmazonOwnedProducts>
            </AmazonOwnedProducts>
            </SiteMap>
    

        </Container>
    )
}

export default Footer

const Container = styled.div`
    padding: 2px;
    display: flex;
    flex-direction: column;
    width: 100%;

`

const BackToTop = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
    background-color: #37475A;    
    align-items: center;
    justify-content: center;
    color: white;
`

const SiteMap = styled.div`

`

const AmazonMap = styled.div`
    display: flex;
    height: 400px;
    width: 100%;
    background-color: #232F3E;    
    justify-content: center;
    color: white;
`
const AmazonOwnedProducts = styled.div`
    height: 400px;
    width: 100%;
    background-color: #131A22;    
    align-items: center;
    justify-content: center;
    color: white;
`