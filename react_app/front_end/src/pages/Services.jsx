import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            

    <div className="bg-light-purple py-5">
        <div className="container text-center">
            <h1 className="display-4 fw-bold">Web Hosting Plans</h1>
            <p className="lead text-muted max-w-700 mx-auto mt-3">Choose the right plan for your website. All plans include
                a 30-day money-back guarantee.</p>

            <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="fw-bold me-3">Monthly</span>
                <div className="form-check form-switch fs-4">
                    <input className="form-check-input" type="checkbox" id="billingToggle" checked />
                </div>
                <span className="fw-bold ms-2">Yearly <span className="badge bg-success ms-2">Save up to 75%</span></span>
            </div>
        </div>
    </div>
    <div className="text-center mb-5 my-5">
        <div className="btn-group" role="group" aria-label="Service Category Filter">
            <button type="button" className="btn btn-primary filter-btn" data-filter="all">All Services</button>
            <button type="button" className="btn btn-outline-primary filter-btn" data-filter="hosting">Web Hosting</button>
            <button type="button" className="btn btn-outline-primary filter-btn" data-filter="vps">VPS Hosting</button>
        </div>
    </div>

    <section className="section-padding">
        <div className="container">
            <div className="row g-4 align-items-center">
                <div className="col-lg-4 pricing-item" data-category="hosting">
                    <div className="pricing-card card shadow-sm h-100">
                        <h3 className="mb-3">Single Web Hosting</h3>
                        <p className="text-muted">Ideal solution for beginners</p>

                        <div className="price">
                            $1.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$9.99/mo</p>

                        <Link to="/service-details" className="btn btn-outline-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$47.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 1 Website</li>
                                <li><i className="fas fa-check"></i> 50 GB SSD Storage</li>
                                <li><i className="fas fa-check"></i> ~10 000 Visits Monthly</li>
                                <li><i className="fas fa-check"></i> 1 Email Account</li>
                                <li><i className="fas fa-check"></i> Free SSL</li>
                                <li><i className="fas fa-check"></i> Free Domain (No)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 pricing-item" data-category="hosting">
                    <div className="pricing-card popular shadow-lg h-100">
                        <div className="popular-badge">MOST POPULAR</div>
                        <h3 className="mb-3">Premium Web Hosting</h3>
                        <p className="text-muted">Perfect package for personal websites</p>

                        <div className="price text-primary">
                            $2.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$11.99/mo</p>

                        <Link to="/service-details" className="btn btn-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$71.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 100 Websites</li>
                                <li><i className="fas fa-check"></i> 100 GB SSD Storage</li>
                                <li><i className="fas fa-check"></i> ~25 000 Visits Monthly</li>
                                <li><i className="fas fa-check"></i> Free Email</li>
                                <li><i className="fas fa-check"></i> Free SSL</li>
                                <li><i className="fas fa-check"></i> Free Domain ($9.99 value)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 pricing-item" data-category="hosting">
                    <div className="pricing-card card shadow-sm h-100">
                        <h3 className="mb-3">Business Web Hosting</h3>
                        <p className="text-muted">Optimized for small businesses</p>

                        <div className="price">
                            $3.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$16.99/mo</p>

                        <Link to="/service-details" className="btn btn-outline-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$95.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 100 Websites</li>
                                <li><i className="fas fa-check"></i> 200 GB NVMe Storage</li>
                                <li><i className="fas fa-check"></i> ~100 000 Visits Monthly</li>
                                <li><i className="fas fa-check"></i> Free Email</li>
                                <li><i className="fas fa-check"></i> Free SSL</li>
                                <li><i className="fas fa-check"></i> Free Domain ($9.99 value)</li>
                                <li><i className="fas fa-check"></i> Daily Backups</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 pricing-item" data-category="vps">
                    <div className="pricing-card card shadow-sm h-100 extra-plan d-none">
                        <h3 className="mb-3">Basic VPS Hosting</h3>
                        <p className="text-muted">Ideal solution for beginners</p>

                        <div className="price">
                            $1.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$9.99/mo</p>

                        <Link to="/service-details" className="btn btn-outline-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$47.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 1 Website</li>
                                <li><i className="fas fa-check"></i> 50 GB SSD Storage</li>
                                <li><i className="fas fa-check"></i> Free Domain (No)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 pricing-item" data-category="vps">
                    <div className="pricing-card popular shadow-lg h-100 extra-plan d-none">
                        <div className="popular-badge">MOST POPULAR</div>
                        <h3 className="mb-3">Premium VPS Hosting</h3>
                        <p className="text-muted">Perfect package for personal websites</p>

                        <div className="price text-primary">
                            $2.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$11.99/mo</p>

                        <Link to="/service-details" className="btn btn-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$71.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 100 Websites</li>
                                <li><i className="fas fa-check"></i> 100 GB SSD Storage</li>
                                <li><i className="fas fa-check"></i> Free Domain ($9.99 value)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 pricing-item" data-category="vps">
                    <div className="pricing-card card shadow-sm h-100 extra-plan d-none">
                        <h3 className="mb-3">Business VPS Hosting</h3>
                        <p className="text-muted">Optimized for small businesses</p>

                        <div className="price">
                            $3.99<span>/mo</span>
                        </div>
                        <p className="text-muted small text-decoration-line-through mb-4">$16.99/mo</p>

                        <Link to="/service-details" className="btn btn-outline-primary w-100 mb-4">Select Plan</Link>
                        <p className="text-muted small mb-4">$95.76 for the first year</p>

                        <div className="text-start">
                            <h5 className="fs-6 fw-bold mb-3">Top Features</h5>
                            <ul className="features-list">
                                <li><i className="fas fa-check"></i> 100 Websites</li>
                                <li><i className="fas fa-check"></i> 200 GB NVMe Storage</li>
                                <li><i className="fas fa-check"></i> Daily Backups</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-5">
            <button type="button" id="load-more-btn" className="btn btn-primary px-4 py-2">Load
                More</button>
        </div>
    </section>

            </>
    );
};

export default Services;
