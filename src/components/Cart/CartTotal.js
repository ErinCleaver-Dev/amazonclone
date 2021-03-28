import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({total, count}) {
    

    return (
        <Container>
            <Subtotal>
                Subtotal ({count} items): <NumberFormat value={total} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />

            </Subtotal>
            <CheckOutButton type="button">
                Proceed to Checkout
            </CheckOutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: white;
    flex: 0.25;
    max-height: 200px;
    padding: 20px;
    margin-top: 80px;
    margin-left: 18px;
    border-radius: 25px;
    
`

const Subtotal = styled.h2`
    margin-bottom: 10px;
`

const CheckOutButton = styled.button`
    background-color: #FFD813;
    width: 100%;
    font-size: 20px;
    border-radius: 20px;
    border: 2px solid #a88734;
    cursor: pointer;
    :hover {
        background-color: #ddb347;
    }
    :focus {
        outline: none;
    }
`