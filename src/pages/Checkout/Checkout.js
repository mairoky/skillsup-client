import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
    const { course } = data;

    return (
        <div className='checkout'>
            <Container>
                <Row>
                    <Col md={4}>
                        <h3>{course.title}</h3>
                    </Col>
                    <Col md={8}>
                        <h2>Checkout Form</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;