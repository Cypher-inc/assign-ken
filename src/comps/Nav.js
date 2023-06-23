import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';

function NavbarComp() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="black" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={require("./Assets/Desk/Copy of Artboard 1full logo.png")}
              width="180"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="">
              <NavDropdown className="me-3" title="Products" id="basic-nav-dropdown">
                {" "}
              </NavDropdown>
              <NavDropdown className="me-3" title="Industries" id="basic-nav-dropdown">
                {" "}
              </NavDropdown>
              <NavDropdown className="me-3" title="Resources" id="basic-nav-dropdown">
                {" "}
              </NavDropdown>
              <NavDropdown className="me-3" title="Company" id="basic-nav-dropdown">
                {" "}
              </NavDropdown>
              <NavDropdown className="me-3" title="Pricing" id="basic-nav-dropdown">
                {" "}
              </NavDropdown>
              <Button className="me-3 btn1 red-btn" variant="danger">Book a meeting</Button>{' '}
              <Button className="me-3 btn1" variant="outline-primary">Login</Button>{' '}
         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
