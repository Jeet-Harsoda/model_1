import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-body border-bottom py-3">
        <div className="container justify-content-center">
            <a className="navbar-brand fs-2 m-0" href="index.html">
                <i className="fas fa-server" style={{"color":"var(--primary-color)"}}></i> Hoster<span>.</span>
            </a>
        </div>
    </nav>

    <div className="container section-padding">
        <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
                <div className="card shadow border-0 p-4 p-md-5">
                    <div className="text-center mb-4">
                        <h1 className="h3 fw-bold mb-2">Create your account</h1>
                        <p className="text-muted">Start your website journey today.</p>
                    </div>

                    <form className="needs-validation" action="http://localhost:8008/submit-register" method="POST" novalidate>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label fw-semibold">First Name</label>
                                <input type="text" className="form-control form-control-lg" id="firstName" name="fName" placeholder="John" required />
                                <div className="invalid-feedback">Please enter your first name.</div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label fw-semibold">Last Name</label>
                                <input type="text" className="form-control form-control-lg" id="lastName" name="lName" placeholder="Doe" required />
                                <div className="invalid-feedback">Please enter your last name.</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                            <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="name@example.com" required />
                            <div className="invalid-feedback">Please enter an email.</div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <div className="input-group mb-2">
                                <input type="password" className="form-control form-control-lg border-end-0" id="password" name="password" placeholder="Create a password" required />
                                <span className="input-group-text bg-body bg-transparent text-muted cursor-pointer">
                                    <i className="far fa-eye"></i>
                                </span>
                                <div className="invalid-feedback">Please enter your password.</div>
                            </div>
                            <div className="small text-muted">Must be at least 8 characters.</div>
                        </div>

                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="terms" required />
                            <label className="form-check-label text-muted small" htmlFor="terms">
                                I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>.
                            </label>
                            <div className="invalid-feedback">Please agree to the ToS and Privacy Policy.</div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-100 mb-4">Create Account</button>

                        <div className="position-relative mb-4">
                            <hr className="text-muted" />
                            <div className="position-absolute top-50 start-50 translate-middle bg-body px-3 text-muted small">Or sign up with</div>
                        </div>

                        <div className="d-flex gap-3 mb-4">
                            <button type="button" className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
                                <i className="fab fa-google text-danger me-2"></i> Google
                            </button>
                            <button type="button" className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
                                <i className="fab fa-github me-2"></i> GitHub
                            </button>
                        </div>

                        <p className="text-center text-muted m-0">
                            Already have an account? <a href="login.html" className="fw-semibold text-decoration-none">Log in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Register;
