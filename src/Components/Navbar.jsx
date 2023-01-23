import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image1 from "../Images/Icon.png";
import "../css/Navbar.css";
import React, {useState} from 'react';
function Navigationbar() {
    const [aria1, setAria1] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img width="40px" height="40px" src={image1} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={
                <span style={{color: "white"}}>Product</span>
            } id="collasible-nav-dropdown" className='navtext' onMouseEnter={()=>(setAria1(true))} onMouseLeave={()=>(setAria1(false))}>
              <NavDropdown.Item href="#outreach">Kula Outreach</NavDropdown.Item>
              <NavDropdown.Item href="#circles">
                Kula Circles
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="navtext" style={{color: "white"}}>Our Story</Nav.Link>
            <NavDropdown title={
                <span style={{color: "white"}}>Resources</span>
            } id="collasible-nav-dropdown" className='navtext'>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#guides">
                Guides
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Nav.Link href="#form">
                <input type="submit" value="Book a demo" data-wait="Please wait..." id="book-demo-inlanding" class="button-3 gradient-button w-button" data-factors-form-bind="true" data-factors-input-id="form-0.field-1"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;