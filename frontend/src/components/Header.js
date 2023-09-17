import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home">PROSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link href="#login"><i className="fas fa-user"></i>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
