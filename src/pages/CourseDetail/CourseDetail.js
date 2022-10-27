import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import './CourseDetail.css';

const CourseDetail = () => {
    const data = useLoaderData();
    const { id, course, shortDes, des, learn, instructor, lastUpdate, language, targetAudience, tag } = data;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className='course-detail my-4'>
            <div ref={componentRef} className="course-header py-3">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={4} md={6} sm={12}>
                            <div className="course-image">
                                <img className='img-fluid rounded' src={course.image} alt="" />
                            </div>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <div className="course-header-content">
                                <div className="course-tag">
                                    {
                                        tag.map((t, idx) => <Link key={idx} className="me-2 btn btn-outline-success">{t}</Link>)
                                    }
                                </div>
                                <h3 className='mt-3'>{course.title}</h3>
                                <p className='my-3'>{shortDes}</p>
                                <p>Last updated {lastUpdate}</p>
                                <div className="course-rating-info">
                                    <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> {course.rating}</span>
                                    <button onClick={handlePrint} className='ms-2 btn btn-outline-danger'>Download Curriculum</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="course-detail-content py-3">
                <Container>
                    <Row>
                        <Col lg={9} md={12} sm={12}>
                            <div className="course-detail-info side-bar-box">
                                <h4>Course Description:</h4>
                                <p>{des}</p>
                                <h4>What you'll learn?</h4>
                                {
                                    learn.map((l, idx) => <li key={idx}><Link>{l}</Link></li>)
                                }
                                <h4 className='mt-3'>Target Audience:</h4>
                                {
                                    targetAudience.map((ta, idx) => <li key={idx}><Link>{ta}</Link></li>)
                                }
                            </div>
                            <div className='text-center mt-3'>
                                <Link to={`/checkout/${id}`} className='btn btn-success'>Get Premium Access</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="right-side-bar">

                                <div className="course-feature side-bar-box">
                                    <h4>Course Features</h4>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Price:</span>
                                        <span>${course.price}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Lectures:</span>
                                        <span>{course.lectures}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Quizzes:</span>
                                        <span>{course.quizzes}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Duration:</span>
                                        <span>{course.duration} hours</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Skill Level:</span>
                                        <span>All Level</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Language:</span>
                                        <span>{language}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Assessment:</span>
                                        <span>Yes</span>
                                    </div>
                                    <Link to={`/checkout/${id}`} className='d-block w-100 btn btn-outline-success'>Enrol Now</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CourseDetail;