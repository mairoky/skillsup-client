import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/pagenotfound.png';

const PageNotFound = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">
                            <img className='img-fluid' src={Image} alt="" />
                            <p>The page you are looking for does not exist!!!</p>
                            <Link to="/" className='btn btn-outline-danger'>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PageNotFound;