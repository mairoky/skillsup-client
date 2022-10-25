import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaImage, FaUser } from "react-icons/fa";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    // Get Auth Context Data
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // Handle Register Form Data 
    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleProfileUpdate(name, photo);
                toast.success('Registration successful! Please verify your email address.');
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message);
            })
    }

    // Update user profile
    const handleProfileUpdate = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 m-auto">
                        <div className="card">
                            <form onSubmit={handleRegistration}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Create Account</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <FaUser />
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" name="name" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <FaImage />
                                        <label htmlFor="photo">PhotoURL</label>
                                        <input type="text" id="photo" name="photo" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <MdOutlineEmail />
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                    <div className="form-group mt-2">
                                        <MdPassword />
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success login-btn mt-3">Register</button>
                                        <Link to="/login" className="d-block register-link">Already have an Account?<span> Login Now</span></Link>
                                    </div>
                                    <hr />
                                    <div className="text-center social-login">
                                        <Link className="d-block btn btn-outline-success"><FaGoogle /> Signup with Google</Link>
                                        <Link className="d-block btn btn-outline-success mt-2"><FaFacebook /> Signup with Facebook</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;