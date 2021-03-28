import React from 'react'
import styled from 'styled-components'
import { db } from '../../Firebase/firebase';

const CartItem = ({id, item}) => {
    let options = []

    const deleteItem = (e) => {
        e.preventDefault();
        db.collection('cartItems').doc(id).delete();
    }

    for (let i = 1; i <Math.max(item.quantity+1, 20); i++) {
        options.push(<option value={i}> Qty: {i}</option>);   
    }

    const changeQuantity = (newQuantity) => {
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    return(
        <Container>
            
            <ImageContainer>
                <img src={item.loadImage}></img>
            </ImageContainer>
            <CartInformation>
                <CartInformationTop>
                   <h2>{item.name}</h2>
                </CartInformationTop>
                <CartInfomrationBottom>
                    <CartItemQuantiyContainer>
                        <select  
                        value = {item.quantity}
                        onChange={(e)=> changeQuantity(e.target.value)}
                        >
                            

                            {options}
                        </select>
                    </CartItemQuantiyContainer>
                    <CartItemDeleteContainer onClick={deleteItem}>
                        delete
                    </CartItemDeleteContainer>
                </CartInfomrationBottom>

            </CartInformation>
            <CartPrice>
                ${item.price}
            </CartPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    display: flex;
    background-color: #E1EDEC;
    padding: 12px 0px;
    border-bottom: 2px solid #E8E8E8;    
`
const ImageContainer = styled.div`
    margin-right: 16px;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const CartInformation = styled.div`
 
`
const CartInformationTop = styled.div`
    color: #007185;
    margin-bottom: 8px;
    h2 {
        font-size: 18px;
    }
`
const CartInfomrationBottom = styled.div`
    display: flex;
`
const CartItemQuantiyContainer = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15, 17, 17,. 15)
    }

    :focus {
        outline: none;
    }
    border-right: 2px solid #E8E8E8;
    padding-right: 10px;
`
const CartItemDeleteContainer = styled.div`
    color: #007185;
    padding-left: 10px;
    cursor: pointer;
`

const CartPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
    padding-right: 10px;
`