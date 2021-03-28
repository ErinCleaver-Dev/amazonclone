import React, {Component, setState} from 'react'
import styled from 'styled-components';
import _ from 'lodash';
import { db } from '../../Firebase/firebase';

class Items extends Component {

    
    constructor({props }) {
        super({props});
    }
    deleteProduct = (e) => {
        e.preventDefault();
        db.collection('products').doc(this.props.id).delete();
    }

    state = {
        name: "",
        loadImage: "",
        price: 0,
        rating: 0,
    };
      
    handleInputChange =(property) => {
        return e=> {
        this.setState({
            [property]: e.target.value,
        });
        };
    }



    addUpdate= (e) => {
        e.preventDefault();   
        let products = db.collection('products');
        console.log(this.state.name);
        if(products.where("name", "!=", this.state.name)) {
            if(this.state.name != "") {
                db.collection('products').doc(this.props.id).update ({
                    
                    name: this.state.name})
            }
        }
        if(products.where("loadImage", "!=" ,this.state.loadImage)) {
            if(this.state.name != "") {
                db.collection('products').doc(this.props.id).update ({
                    loadImage: this.state.loadImage
                })
            }
        }
        if(this.state.price !== Number(this.state.price)) {
            db.collection('products').doc(this.props.id).update ({
                price: Number(this.state.price)})
        }
        if(this.state.rating !== Number(this.state.rating)) {
            db.collection('products').doc(this.props.id).update ({
                rating: Number(this.state.rating)})
        }        
           
    }

    


    render () {
        console.log(this.state.name)
        
        return(
            <Container>
            <AddItem>
                <ItemName name="title" type="text"  value={this.state.name || this.props.name} onChange={this.handleInputChange('name')}/>
                <ItemImage name="loadImage" type="text" value={this.state.loadImage || this.props.loadImage} onChange={this.handleInputChange('loadImage')}/>
                <ItemPrice name="price" type="number" value={this.state.price || this.props.price} onChange={this.handleInputChange('price')}/>
                <ItemRaiting name="rating" type="number" value={this.state.rating || this.props.rating} onChange={this.handleInputChange('rating')}/>
                <EditButton type="submit" value="edit" onClick={this.addUpdate}/>
                <DeleteButton type="submit" value="Delete" onClick={this.deleteProduct}/>
            </AddItem>
            </Container>
        );
    }
}

export default Items


const Container = styled.div`
display: flex;
`
const AddItem = styled.form`
display: flex;

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

const EditButton = styled.input`
cursor: pointer;
margin-left: 5px;
`
const DeleteButton = styled.input`
cursor: pointer;
margin-left: 5px;
`

