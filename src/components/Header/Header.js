import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Skills<span>UP</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>More</Nav.Link>
                            <Nav.Link>
                                Dark Theme
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;