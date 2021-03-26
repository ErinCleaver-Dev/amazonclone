import React from 'react'
import styled from 'styled-components';

function Product(props) {
       
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
                {props.price}
            </Price>
            <Rating>
                ⭐⭐⭐⭐⭐
            </Rating>
            <Image>
            <img src={props.loadImage} alt={props.altText}></img>
            </Image>
            <ActivtionSection>
                <AddToCartButton>
                    Add Button
                </AddToCartButton>
            </ActivtionSection>
        </Container>
    )
}



export default Product
const Container = styled.div`
    background-color: #e1edec;
    z-index: 100;
    padding: 20px;
    flex: 1;
    margin: 20px;
    max-hight: 400px;
    max-width: 400px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;

`
const Title = styled.span`

`

const Price = styled.span`
    font-weight: 500px;
    margin-top: 3px;
`

const Rating = styled.span`
`
const Image = styled.span`
    display: grid;
    place-items: center;
    img {
        
        max-height: 400px;
        max-width: 400px;
        object-fit: contain;
    }
`
const AddToCartButton = styled.span`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`

const ActivtionSection = styled.div`
    display: grid;
    place-items: center;
`