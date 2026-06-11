import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-body">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <i className="fas fa-server" style={{"color":"var(--bs-body-color)"}}></i> Hoster<span>.</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/category" id="hostingDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Hosting
                    </Link>
                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="hostingDropdown">
                        <li><Link className="dropdown-item py-2" to="/services"><i
                                    className="fas fa-cloud me-2 text-primary"></i> Web Hosting</Link></li>
                        <li><Link className="dropdown-item py-2" to="/services"><i
                                    className="fas fa-server me-2 text-primary"></i> VPS Hosting</Link></li>
                        <li><Link className="dropdown-item py-2" to="/services"><i
                                    className="fas fa-database me-2 text-primary"></i> Cloud Hosting</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li>
                    <button id="theme-toggle" className="btn btn-outline-secondry ms-3">
                        <i className="fas fa-moon" id="theme-icon"></i>
                    </button>
                </li>
            </ul>

            <div className="d-flex ms-lg-4 align-items-center">
                <Link to="/cart" className="nav-link position-relative me-3">
                    <i className="fas fa-shopping-cart fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{"fontSize":"0.6rem"}}>
                        0
                        <span className="visually-hidden">items in cart</span>
                    </span>
                </Link>
                <Link to="/login" className="btn btn-outline-primary me-2 px-4">Log in</Link>
                <Link to="/register" className="btn btn-primary px-4 d-none d-sm-block">Sign up</Link>
            </div>
        </div>
    </div>
</nav>

<div style={{"height":"76px"}}></div>
        </>
    );
};

export default Header;
