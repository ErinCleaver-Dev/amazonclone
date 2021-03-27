import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}) {
    return (
        <Container>
            <CartItems cartItems ={cartItems}/>
            <CartTotal/>
           
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    height: 1000px;
    padding: 14px 18px 0 18px;
`
