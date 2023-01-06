import React, {useState} from 'react';
import DrinkPage from './DrinkPage';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../bean.png';
import DrinkSearch from "./DrinkSearch";

function App() {
  const [searchString, setSearchString] = useState("");

  return (
    <div className="App">
      <Navbar>
      <Container>
        <Navbar.Brand className="App-font">
          <img alt="logo"
            src={logo} width="60" height="60"className="App-logo"
          />{' '}
          Pick me up in a cup
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/favorites">MY COLLECTION</Nav.Link >
      </Nav>
      <DrinkSearch searchString={searchString} onChangeSearch={setSearchString}/>
      </Container>
    </Navbar>,
     <DrinkPage searchString={searchString}/>
    </div>
  );
}

export default App;
