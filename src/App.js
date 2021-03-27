import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';
import Cart from './components/Cart/Cart';
import Database from './components/databaseUpdate/Database'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {db} from './Firebase/firebase';
import CartItem from './components/Cart/CartItem';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems)
    });
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <div>
      <Router>
        <Container>
          <Header />
          <NavBar />
          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems}/>
            </Route>
            <Route path="/Database">
              <Database />
            </Route>
            <Route path="/">
              <Home cartItems={cartItems}/>
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Router>


    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`