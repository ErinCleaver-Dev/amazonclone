import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import ipadPhoto from "../../img/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH.png"

function Home ()   {
    return (
        <Body>
            <Banner>
                
            </Banner>
            <Content>
                <Product title="ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH" price="$1449" loadImage="https://i.imgur.com/gPvBX0L.png"/>
                <Product title="Microsoft Surface Laptop 3" price="$798.98" loadImage="https://i.imgur.com/0iTIAkq.jpg"/>
                <Product title="Nature Made Elderberry Gummies with 
                Vitamin C & Zinc, 60 Count To Help Support The Immune System" price="$13.99" loadImage="https://i.imgur.com/H6ddlq0.jpg"/>


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
    overflow:hidden
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
