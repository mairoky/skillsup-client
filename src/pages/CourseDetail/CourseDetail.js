import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";
import './CourseDetail.css';

const CourseDetail = () => {
    const data = useLoaderData();
    console.log(data);
    const { course, shortDes, des, learn, instructor, lastUpdate, language, targetAudience, tag } = data;
    return (
        <div className='course-detail'>
            <div className="course-header py-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="course-image">
                                <img className='img-fluid rounded' src={course.image} alt="" />
                            </div>
                        </Col>
                        <Col md={8}>
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
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="course-detail-content py-5">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="course-detail-info">
                                <h4>Course Description:</h4>
                                <p>{des}</p>
                                <h4>What you'll learn?</h4>
                                {
                                    learn.map((l, idx) => <li key={idx}><Link>{l}</Link></li>)
                                }
                                <h4>Target Audience:</h4>
                                {
                                    targetAudience.map((ta, idx) => <li><Link>{ta}</Link></li>)
                                }
                            </div>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CourseDetail;