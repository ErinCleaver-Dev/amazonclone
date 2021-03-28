import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'



function CartItems({cartItems}) {
    return (
        <Container>
            <Title>
                Shopping Cart
            </Title>
            <ItemsContainer>
            {
                cartItems.map((item)=>(
                    <CartItem 
                        id={item.id}
                        item={item.product}

                    />
                ))
            }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    flex: 0.75;
    padding: 20px;
`
const Title = styled.div`
    font-size: 40px;
    border-bottom: 2px solid black;
`
const ItemsContainer = styled.div`
`

