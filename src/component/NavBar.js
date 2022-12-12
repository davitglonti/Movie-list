import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link
  } from "react-router-dom";
  
import {Nav,Navbar, Container} from "react-bootstrap/";
const NavBar = () => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Popular">Popular</Nav.Link>
            <Nav.Link href="Top">Top rated</Nav.Link>
            <Nav.Link href="Upcoming">Upcoming</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar