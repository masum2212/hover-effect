import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';

function NavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-5">
                  <Nav.Link activeClassName='menu-active' className='hover-main' href="/">Home</Nav.Link>
                  <Nav.Link activeClassName='menu-active' href="/about">About</Nav.Link>
                  <Nav.Link href="/service">Service</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link href="#">Log in</Nav.Link>
                  <Nav.Link href="#">Sing Up</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar