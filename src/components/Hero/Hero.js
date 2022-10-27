import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-top'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="hero-banner">
                                <h2>Start Learning daily <br />
                                    <span>new thing</span></h2>
                                <p>Search & Study any topics, anytime. Choose from thousands of expert-led courses now.</p>
                                <div className="form-group mt-2">
                                    <input type="text" id="search" name="search" className="form-control" placeholder="What do you want to learn?" />
                                    <button className='d-block w-50 btn btn-outline-success mt-2'>Search</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </section>
    );
};

export default Hero;