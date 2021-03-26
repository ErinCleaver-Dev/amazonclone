import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Container>
            <HeaderLogo >
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"} alt="amazon logo"/>
                </Link>
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
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                    </Link>
                        <CartCount>5</CartCount>
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
    justify-content: center;
    
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOption = styled.div`
    padding: 10px 9px;
`

const optionLineOne = styled.div`

`

const optionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
   display: flex;
   flex-grow: 1;
   height: 40px;
   border-radius: 4px;
   overflow: hidden;
   margin-left: 4px;
   max-width: 950px;

`

const SelectionOptionOne = styled.input``

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    max-width: 950px;
    min-width: 100px;
    width: 45px;
    bakground: white;
    border: 0;
    border-radius: 10px 0px 0px 10px;
    padding: 2px;
    : focus {
        outline: none;
    }
  
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    color: black;
    display: flex;
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 10px 10px 0px;
`

const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOptionsCart = styled.div`
    display: flax;
    path:active {
        color: white;
    }
    path {
        align-items: center;
        color: white;
        text-direction: none;
    }
`

const CartCount = styled.div`

`