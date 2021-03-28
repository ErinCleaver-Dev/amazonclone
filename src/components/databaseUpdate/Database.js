import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Add from './Add';
import Update from './Update'
import {db} from '../../Firebase/firebase'

function Database() {
    const [products, setProducts] = useState([]);
    

    const getProducts= () => {
        db.collection('products').onSnapshot((snapshot)=>{
          const tempProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            product: doc.data()
          }))
    
          setProducts(tempProducts)
        });
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <Add/>
            <Update products={products}/>
        </Container>
    )
}

export default Database
const Container = styled.div`
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    display: grid;
`