import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard from '../../components/CourseCard/CourseCard';
import './Course.css';

const Course = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='course my-4'>
            <Container>
                <Row>
                    <Col lg={8} md={7} sm={12}>
                        <Row>
                            {
                                courses.map(c => <CourseCard key={c.id} data={c}></CourseCard>)
                            }
                        </Row>
                    </Col>
                    <Col lg={4} md={5} sm={12}>
                        <div className='course-side-bar side-bar-box'>
                            <h5 className='mb-3'>Popular Course</h5>
                            {
                                courses.map(c => <p key={c.id}><Link to={`/course/${c.id}`}>{c.course.title}</Link></p>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;