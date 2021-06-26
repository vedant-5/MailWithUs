import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarHome() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">MailWithUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-5">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
