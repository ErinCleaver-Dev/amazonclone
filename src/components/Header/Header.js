import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";
import Select from 'react-select';

class Header extends React.Component {
    constructor({cartItems, user, signOut}) {
        super({cartItems, user, signOut});
        
    }
    getCount = () => {
        let count = 0;
        this.props.cartItems.forEach((item) => {
            // add the quanity of the cart item to total
            count += item.product.quantity;
        });

        return count;
    }
    
    state = {
        value: {label: this.props.val, value: this.props.val}
    }
    
    options= [
        {
            value: "All",
            lable: "All"
        }

    ];

    handleChange(value) {
        this.setState({value: value});
    }

    render () { 
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
                <SearchDropDown 
                    options={this.options}
                    value={this.state.value}
                    onChange={value => this.handleChange(value)}
                    defaultValue={{value: 'All', label: 'All'}}
                />
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer> 
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOptionSignout onClick={this.props.signOut}>
                    <OptionLineOne><p>Hello, {this.props.user.name}</p></OptionLineOne>
                    <OptionLineTwo><p>Accounts & Lists</p></OptionLineTwo>
                </HeaderOptionSignout>
                <HeaderOption>
                    <OptionLineOne><p>Returns</p></OptionLineOne>
                    <OptionLineTwo><p>& Orders</p></OptionLineTwo>
                </HeaderOption>
            </HeaderNavItems>
                
                    <HeaderOptionsCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                    </Link>
                        <CartCount>{this.getCount()}</CartCount>
                    </HeaderOptionsCart>
        </Container>
        )
    }
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

const HeaderOptionSignout = styled.div`
    padding: 10px 9px;
    cursor: pointer;
`

const HeaderOption = styled.div`
    padding: 10px 9px;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
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

const SearchDropDown = styled(Select)`

`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    max-width: 950px;
    min-width: 100px;
    width: 45px;
    background: white;
    border: 0;
    border-radius: 10px 0px 0px 10px;
    padding: 2px;
    :focus {
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
        text-decoration: none;
    }
`

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`