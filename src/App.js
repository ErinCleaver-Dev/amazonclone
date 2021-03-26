import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';
import Cart from './components/Cart/Cart';
import databaseUpdate from './components/databaseUpdate/databaseUpdate'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';


function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <NavBar />
          <Switch>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/databaseUpdate">
            </Route>
            <Route path="/">
              <Home />
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