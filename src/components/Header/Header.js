import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Skills<span>UP</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/course" >Courses</Nav.Link>
                            <Nav.Link as={NavLink} to="/faq" >Faq</Nav.Link>
                            <Nav.Link as={NavLink} to="/blog" >Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>Dark Theme</Nav.Link>
                            <Nav.Link as={NavLink} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;