import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-10 m-auto">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How do I take a course?</Accordion.Header>
                                <Accordion.Body>
                                    This courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app.
                                    After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your account).
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Do I receive certificate after I complete a course?</Accordion.Header>
                                <Accordion.Body>
                                    While we are not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Is there any way to preview a course?</Accordion.Header>
                                <Accordion.Body>
                                    Yes! If you want to compare courses to see which ones fit your current needs best, this article outlines how you can preview a course, and see if it’s the right course for you. In addition, this article explains how you can review key information about a course, the instructor(s), and read student reviews on the course landing page.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What if I don’t like a course I purchased?</Accordion.Header>
                                <Accordion.Body>
                                    We want you to be satisfied, so all eligible courses purchased on skillsUp can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How can I pay for a course?</Accordion.Header>
                                <Accordion.Body>
                                    SkillsUp supports several different payment methods, depending on your account country and location.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;