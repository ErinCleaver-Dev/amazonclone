import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './../../Firebase/firebase'
function Login({setUser}) {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                phone: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        

        }).catch((error) => {

            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            alert(errorCode);

            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
        });

    }

    return (
       
        <Container>
            <Content>
                <AmazonLogo src="https://i.imgur.com/cm7P1Ss.png"/>
                <h1>Sign into Amazon</h1>
                <LoginButton
                onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>   
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #EAEDED , #A4D6D6);
    height: 1000px;
    display: grid;
    place-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 25px;
    box-shadow: 0 1px 3px;
    text-align: center;
`

const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    padding: 3px;
    border-radius: 5px;
    border: 2px solid #a88734;
    cursor: pointer;
    

`