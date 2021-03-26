import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';
import Cart from './components/Cart/Cart';
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
            <Route path="/card=t">
              <Cart/>
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