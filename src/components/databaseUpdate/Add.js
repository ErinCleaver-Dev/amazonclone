import React, {setState, Component} from 'react';
import styled from 'styled-components';
import {db} from '../../Firebase/firebase';






class Database extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "tile",
            loadImage: "url",
            price: 0,
            rating: 0,
        };
    }   


     
    handleInputChange(property) {
        return e=> {
        this.setState({
            [property]: e.target.value,
        });
        };
    }

    addToCart = (e) => {
        e.preventDefault();
        

        db.collection('products').add ({
            name: this.state.title,
            loadImage: this.state.loadImage,
            price: Number(this.state.price),
            rating: Number(this.state.rating)
        })
           
    }
    render () {
        return (
            <Container>
                <FormTitle>
                    <h1>Add new Invenotry Item</h1>
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
                <AddItem>
                    <ItemName name="title" type="text" value={this.state.title} onChange={this.handleInputChange('title')}/>
                    <ItemImage name="loadImage" type="text" value={this.state.loadImage} onChange={this.handleInputChange('loadImage')}/>
                    <ItemPrice name="price" type="number" value={this.state.price} onChange={this.handleInputChange('price')}/>
                    <ItemRaiting name="rating" type="number" value={this.state.rating} onChange={this.handleInputChange('rating')}/>
                    <AddButton type="submit" value="Add" onClick={this.addToCart}/>
                </AddItem>
            </Container>
        );
    }
    
 
}

export default Database

const Container = styled.div`
display: flex;
flex-direction: column;  
align-items: center;  
padding-bottom: 10px;
`
const AddItem = styled.form`
display: flex;

`

const FormTitle = styled.form`

`

const ItemName = styled.input`
width: 150px;
`
const ItemImage = styled.input`
width: 150px;
`
const ItemPrice = styled.input`
width: 150px;
`
const ItemRaiting = styled.input`
width: 150px;
`

const AddButton = styled.input`
cursor: pointer;
margin-left: 5px;
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
