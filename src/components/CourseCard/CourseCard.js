import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from "react-icons/fa";
import './CourseCard.css';

const CourseCard = ({ data }) => {
    // console.log(data);
    const { id, course, shortDes, instructor } = data;
    return (
        <div className='col-lg-6 col-12'>
            <Card className="course-item">
                <Link to={`/course/${id}`}>
                    <Card.Img variant="top" className='img-fluid' src={course.image} />
                </Link>
                <Card.Body>
                    <div className="course-meta d-flex align-items-center justify-content-between my-2">
                        <div className="course-rating">
                            <span><FaStar /> {course.rating}</span>
                        </div>
                        <div className="course-price">
                            <h4 className='m-0'>${course.price}</h4>
                        </div>
                    </div>
                    <Card.Title>
                        <Link>
                            {course.title}
                        </Link>
                    </Card.Title>
                    <Card.Text>
                        <small>{shortDes}</small>
                    </Card.Text>
                    <Card.Footer className="course-footer d-flex align-items-center justify-content-between">
                        <div className="instructor d-flex align-items-center">
                            <div className="instructor-img">
                                <img className='img-fluid' src={instructor.image} alt="" />
                            </div>
                            <span><small>{instructor.name}</small></span>
                        </div>
                        <Link to={`/course/${id}`}>Know Details <FaArrowRight /></Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;