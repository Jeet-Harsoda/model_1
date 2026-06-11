import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 mb-4">
                <Link className="navbar-brand text-white fs-3 font-weight-bold mb-3 d-block" to="/">
                    <i className="fas fa-server" style={{"color":"var(--primary-color)"}}></i> Hoster<span>.</span>
                </Link>
                <p className="text-white-50 mb-4 pe-lg-5">We provide world-class web hosting services with 99.9% uptime
                    guarantee, 24/7 support, and industry-leading performance. Your success is our mission.</p>
                <div className="social-icons">
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-twitter"></i></Link>
                    <Link to="#"><i className="fab fa-instagram"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="mb-4">Hosting</h5>
                <ul className="footer-links">
                    <li><Link to="/services">Web Hosting</Link></li>
                    <li><Link to="/services">VPS Hosting</Link></li>
                    <li><Link to="/services">Cloud Hosting</Link></li>
                    <li><Link to="/services">WordPress Hosting</Link></li>
                    <li><Link to="/services">Email Hosting</Link></li>
                    <li><Link to="/faq">Frequently asked questions</Link></li>
                </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4">
                <h5 className="mb-4">Company</h5>
                <ul className="footer-links">
                    <li><Link to="/about">About Hoster</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/order-history">Order History</Link></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="mb-4">Subscribe to Newsletter</h5>
                <p className="text-white-50 mb-3">Get the latest updates, news and exclusive offers directly in your inbox.
                </p>
                <form className="d-flex">
                    <input type="email" className="form-control me-2 border-0 bg-body" placeholder="Your Email Address"
                        style={{"opacity":"0.9"}} />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </form>
                <div className="mt-4 pt-2 d-flex align-items-center">
                    <i className="fas fa-headset fs-2 me-3 text-primary"></i>
                    <div>
                        <span className="d-block text-white-50">24/7 Support</span>
                        <strong className="fs-5">+91 1234567890</strong>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-5 pt-4 border-top" style={{"borderColor":"rgba(255,255,255,0.1) !important"}}>
            <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 text-white-50">&copy; 2026 Hoster. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
                <Link to="#" className="text-white-50 text-decoration-none me-3">Privacy Policy</Link>
                <Link to="#" className="text-white-50 text-decoration-none">Terms of Service</Link>
            </div>
        </div>
    </div>
</footer>
        </>
    );
};

export default Footer;
