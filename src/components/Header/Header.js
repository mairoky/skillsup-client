import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ProfileImage from '../../images/profile.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // Handle Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                            {
                                user?.uid ?
                                    <>
                                        <Nav.Link as={Link} onClick={handleLogOut} >
                                            Logout
                                        </Nav.Link>
                                        <Nav.Link to="/profile">
                                            <OverlayTrigger
                                                placement='bottom'
                                                overlay={
                                                    <Tooltip>
                                                        {user?.displayName}
                                                    </Tooltip>
                                                }>
                                                {
                                                    user?.photoURL ?
                                                        <Image
                                                            src={user?.photoURL}
                                                            roundedCircle
                                                            style={{ height: '30px' }}>
                                                        </Image>
                                                        :
                                                        <Image
                                                            src={ProfileImage}
                                                            roundedCircle
                                                            style={{ height: '30px' }}>
                                                        </Image>
                                                }
                                            </OverlayTrigger>
                                        </Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={NavLink} to="/login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;