import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PROSHOP</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
