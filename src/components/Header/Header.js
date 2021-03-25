import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <Container>
            <HeaderLogo >
                <img src={"https://i.imgur.com/7I9Was5.png"} alt="amazon logo"/>
            </HeaderLogo>
            <HeaderOption>
                <optionLineOne><p>Hello,</p></optionLineOne>
                <optionLineTwo><p>Select your address</p></optionLineTwo>
            </HeaderOption>
            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer> 
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <optionLineOne><p>Hello, Erin</p></optionLineOne>
                    <optionLineTwo><p>Accounts & Lists</p></optionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <optionLineOne><p>Returns</p></optionLineOne>
                    <optionLineTwo><p>& Orders</p></optionLineTwo>
                </HeaderOption>
            </HeaderNavItems>
            <HeaderOptionsCart>

            </HeaderOptionsCart>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    height: 60px;
    background-color: #0F1111;    
    align-items: center;
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOption = styled.div`
    padding: 5px;
`

const optionLineOne = styled.div`

`

const optionLineTwo = styled.div`

`

const HeaderSearch = styled.div`
    display: flex;
`

const HeaderSearchInput = styled.input`

`

const HeaderSearchIconContainer = styled.div`
    background-color
`

const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOptionsCart = styled.div`

`