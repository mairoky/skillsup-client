import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import './Checkout.css';

const Checkout = () => {
    const data = useLoaderData();
    // console.log(data);
    const { course, shortDes } = data;
    const { user } = useContext(AuthContext);

    const [userName, setUserName] = useState(user?.displayName);
    const [userEmail, setUserEmail] = useState(user?.email);

    // Handle Checkout
    const handleCheckOut = (e) => {
        e.preventDefault();
        const form = e.target;
        const payment = form.payment.value;
        // console.log(userName, userEmail, payment);
        if (payment === course?.price) {
            toast.success(`Hi ${userName}, Thank you for purchasing this awesome course!!`);
        } else {
            toast.error(`Hi ${userName}, Please pay right amount to purchase this awesome course!!`);
        }
    }

    return (
        <div className='checkout my-4'>
            <Container>
                <Row className='align-items-lg-center'>
                    <Col lg={5} sm={12}>
                        <Card>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    {shortDes}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='mt-3 side-bar-box'>
                            <h4>Order Summery</h4>
                            <div className='d-flex justify-content-between my-3'>
                                <div>Total Price:</div>
                                <div>${course.price}</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7} sm={12}>
                        <div className="card form-card">
                            <form onSubmit={handleCheckOut}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Checkout</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input readOnly defaultValue={userName} type="text" id="name" name="name" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input readOnly defaultValue={userEmail} type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="payment">Payment Amount</label>
                                        <input type="text" id="payment" name="payment" className="form-control" required />
                                    </div>
                                    <button className='d-block w-100 btn btn-danger mt-4'>Proceed To Checkout</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;