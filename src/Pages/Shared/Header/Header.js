import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {

    return (
        <Navbar className="navbar-main-top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home"> <img src="https://i.ibb.co/r3GCBph/main-logo.png" alt="" style={{ height: "20px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="warehouse">Warehouse</Nav.Link>
                        <Nav.Link as={Link} to="store">Books Store</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Featured Books</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Best Selling Books
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Popular Books</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Books With Offer
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} as={Link} to="login">
                            Login/Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;