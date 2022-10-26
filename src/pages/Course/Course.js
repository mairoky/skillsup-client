import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Course.css';
import CourseCard from '../../components/CourseCard/CourseCard';

const Course = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='course'>
            <Container>
                <Row>
                    <Col md={8}>
                        <Row>
                            {
                                courses.map(c => <CourseCard key={c.id} data={c}></CourseCard>)
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h4>Popular Course</h4>
                        {
                            courses.map(c => <p key={c.id}><Link to={`/course/${c.id}`}>{c.course.title}</Link></p>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;