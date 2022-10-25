import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    // Get Auth Context Data
    const { logIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // Handle login form Data
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error)
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7 m-auto">
                        <div className="card">
                            <form onSubmit={handleLogin}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Login</h3>
                                    </div>
                                    <hr />
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
                                        <button className="btn btn-success login-btn mt-3">Login</button>
                                        <Link to="/register" className="d-block register-link">Don't have Account?<span> Register Now</span></Link>
                                        <Link className="d-block">Forgot Password?</Link>
                                    </div>
                                    <hr />
                                    <div className="text-center social-login">
                                        <Link className="d-block btn btn-outline-success"><FaGoogle /> Login with Google</Link>
                                        <Link className="d-block btn btn-outline-success mt-2"><FaFacebook /> Login with Facebook</Link>
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

export default Login;