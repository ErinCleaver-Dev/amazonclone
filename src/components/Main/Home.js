import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Product from './Product';
import ipadPhoto from "../../img/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH.png"
import {db} from '../../Firebase/firebase';

function Home ()   {
    const [products, SetProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = [];

            tempProducts = snapshot.docs.map((doc)=> ({
                id: doc.id,
                product: doc.data()
            }));

            SetProducts(tempProducts);
        });
    }

    useEffect(() => {
        getProducts();
    }, [])

    console.log();
    return (
        <Body>
            <Banner>
                
            </Banner>
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                        title={data.product.name} 
                        price= {data.product.price}
                        rating={data.product.rating} 
                        loadImage={data.product.loadImage}/>

                    ))

                }

              


            </Content>
         
        </Body>
    )
}

export default Home

const Body = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 1) , rgba(0, 0, 0, 0));
    margin: 2px;

`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -350px;
    background: white;
    padding-left: 10px;
    padding-right: 10px;
`
