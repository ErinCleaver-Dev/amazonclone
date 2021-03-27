import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart() {
    return (
        <Container>
            <CartItems>

            </CartItems>
           
        </Container>
    )
}

export default Cart

const Container = styled.div`
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    display: grid;
    height: 1000px;
`
