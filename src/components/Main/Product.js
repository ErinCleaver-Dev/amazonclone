import React from 'react'
import styled from 'styled-components';
import {db} from '../../Firebase/firebase';


function Product({name, price, rating, loadImage, altText, id}) {
       
    console.log(id);

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc) => {
            if(doc.exists){
            
                cartItem.update ({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: name,
                    loadImage: loadImage,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {name}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <div>&#11088;</div>)
                }
            </Rating>
            <Image>
            <img src={loadImage} alt={altText}></img>
            </Image>
            <ActivtionSection>
                <AddToCartButton onClick={addToCart}>
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
    max-height: 400px;
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
    display: flex;
`
const Image = styled.span`
    display: flex;
    justify-content: center;
    height: 200px;
    width: 300px;
    img {
        max-height: 100%;
        max-width: 100%;

        object-fit: contain;
    }
`
const AddToCartButton = styled.span`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    display: grid;
    place-items: bottom;
    border-radius: 2px;
    cursor: pointer;
`

const ActivtionSection = styled.div`
    display: grid;
    place-items: center;
`