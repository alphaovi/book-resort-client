import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Header.css";


const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <Navbar className="nabar navbar-default navbar-main-top" sticky="top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"> <img src="https://i.ibb.co/r3GCBph/main-logo.png" alt="" style={{ height: "20px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Book Shop</Nav.Link>

                        {
                            user && <>
                                <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                                <Nav.Link as={Link} to="addbook">Add Book</Nav.Link>
                            </>
                        }
                        <NavDropdown title="More" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="shop#featured-books">Featured Books</NavDropdown.Item>
                            <NavDropdown.Item href="shop#best-selling">
                                Best Selling Books
                            </NavDropdown.Item>
                            <NavDropdown.Item href="shop#popular-books">Popular Books</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="shop#offer-books">
                                Books With Offer
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="warehouse">Warehouse</Nav.Link>

                        {
                            user ?
                                <Nav.Link eventKey={2}>
                                    <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
                                </Nav.Link>
                                :
                                <Nav.Link eventKey={2} as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;