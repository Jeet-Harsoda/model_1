import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-body border-bottom py-3">
        <div className="container justify-content-center">
            <Link className="navbar-brand fs-2 m-0" to="/">
                <i className="fas fa-server" style={{"color":"var(--primary-color)"}}></i> Hoster<span>.</span>
            </Link>
        </div>
    </nav>

    <div className="container section-padding">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
                <div className="card shadow border-0 p-4 p-md-5">
                    <div className="text-center mb-4">
                        <h1 className="h3 fw-bold mb-2">Log in to your account</h1>
                        <p className="text-muted">Welcome back! Please enter your details.</p>
                    </div>

                    <form className="needs-validation" novalidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                            <input type="email" className="form-control form-control-lg" id="email"
                                placeholder="name@example.com" required />
                            <div className="invalid-feedback">Please enter an email.</div>
                        </div>

                        <div className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <label htmlFor="password" className="form-label fw-semibold m-0">Password</label>
                                <Link to="#" className="small text-decoration-none">Forgot password?</Link>
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control form-control-lg border-end-0" id="password"
                                    placeholder="••••••••" required />
                                <div className="invalid-feedback">Please enter password.</div>
                                <span className="input-group-text bg-body bg-transparent text-muted cursor-pointer">
                                    <i className="far fa-eye"></i>
                                </span>
                            </div>
                        </div>

                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label text-muted" htmlFor="remember">Remember me for 30 days</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg w-100 mb-4">Log in</button>

                        <div className="position-relative mb-4">
                            <hr className="text-muted" />
                            <div
                                className="position-absolute top-50 start-50 translate-middle bg-body px-3 text-muted small">
                                Or continue with</div>
                        </div>

                        <div className="d-flex gap-3 mb-4">
                            <button type="button"
                                className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
                                <i className="fab fa-google text-danger me-2"></i> Google
                            </button>
                            <button type="button"
                                className="btn btn-outline-secondary w-50 d-flex align-items-center justify-content-center">
                                <i className="fab fa-github me-2"></i> GitHub
                            </button>
                        </div>

                        <p className="text-center text-muted m-0">
                            Don't have an account? <Link to="/register" className="fw-semibold text-decoration-none">Sign
                                up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Login;
