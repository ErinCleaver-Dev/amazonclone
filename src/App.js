import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';
import Cart from './components/Cart/Cart';
import Database from './components/databaseUpdate/Database'
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {db, auth} from './Firebase/firebase';

function App() {
  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));


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

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <div>
      <Router>
        {
          !user? (<Login setUser={setUser}/>):(
            <Container>
            <Header user={user} cartItems={cartItems} signOut={signOut}/> 
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
          )
        }
       
      </Router>


    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`