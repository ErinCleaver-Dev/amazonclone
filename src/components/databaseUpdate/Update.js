import React from 'react'
import Items from './Items'
import styled from 'styled-components';

function Update({products}) {
    
    return (
        <Container>
        <FormTitle>
            <h1>Update Invenotry Item</h1>
        </FormTitle>
        <FieldNames>
            <Label>
                Name
            </Label>
            <Label>
                Image
            </Label>
            <Label>
                Price
            </Label>
            <Label>
                Raiting
            </Label>
        </FieldNames>
            {
                products.map((data)=>(
                    <Items 
                    id = {data.id}
                    name={data.product.name} 
                    price= {data.product.price}
                    rating={data.product.rating} 
                    loadImage={data.product.loadImage}/>
                ))
            }
        </Container>
    )
}

export default Update

const Container = styled.div`
    
    border-top: 2px solid black;
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    display: flex;
    flex-direction: column;  
    align-items: center;  
`
const FormTitle = styled.form`

`

const FieldNames = styled.div`
display: flex;
align-items: center;  
margin-left: -150px;

`
const Label = styled.label`
width: 160px;
text-align: center;
`