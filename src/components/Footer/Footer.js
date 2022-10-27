import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className='pt-3'>
            <div className="footer-top">
                <div className="container">
                    <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2">
                        <div className="col mb-3">
                            <Link className='d-flex align-items-center mb-2 link-dark text-decoration-none'><h5 className='m-0'>Skills<span>UP</span></h5></Link>
                            <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                        </div>
                        <div className="col mb-3">
                            <h5>Navigation</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Home</Link></li>
                                <li className='nav-item mb-2'><Link>Course</Link></li>
                                <li className='nav-item mb-2'><Link>Faq</Link></li>
                                <li className='nav-item mb-2'><Link>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Categories</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Development</Link></li>
                                <li className='nav-item mb-2'><Link>Design</Link></li>
                                <li className='nav-item mb-2'><Link>Software</Link></li>
                                <li className='nav-item mb-2'><Link>Academic</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Help & Support</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Privacy</Link></li>
                                <li className='nav-item mb-2'><Link>Terms & Conditions</Link></li>
                                <li className='nav-item mb-2'><Link>Mail Us</Link></li>
                                <li className='nav-item mb-2'><Link>Faqs</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-md-6">
                            <p className='mb-0 text-md-start text-center'>© 2023 SkillsUP. Develop By <Link>RockX Solutions</Link></p>
                        </div>
                        <div className="col-md-6 text-md-end text-center">
                            <ul className="footer-bottom-social">
                                <li><Link><FaFacebookSquare /></Link></li>
                                <li><Link><FaTwitterSquare /></Link></li>
                                <li><Link><FaInstagramSquare /></Link></li>
                                <li><Link><FaLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;