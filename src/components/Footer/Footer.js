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
                <LinkBox>
                    <LinkFormated>
                        <Link to="/Database">
                            Access Database
                        </Link>
                    </LinkFormated>
                </LinkBox>
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
    justify-content: center;
    background-color: #232F3E;    
    color: white;
    outline: none;
    a:active {
        color: white;
    }
    a {
        align-items: center;
        color: white;
        text-decoration: none;
    }
`

const AmazonOwnedProducts = styled.div`
    height: 400px;
    width: 100%;
    background-color: #131A22;    
    align-items: center;
    justify-content: center;
    color: white;
`

const LinkFormated = styled.div`
    padding-left: 50px;
`
const LinkBox = styled.div`
    display: flex;
    justify-content: center;
    max-width: 400px;
    padding-top: 10px;
`