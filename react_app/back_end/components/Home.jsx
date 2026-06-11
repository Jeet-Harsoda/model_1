import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header />

    <section className="hero-section text-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <span className="badge bg-body text-primary mb-3 px-3 py-2 rounded-pill fw-bold">SUMMER SALE - UP TO
                        75% OFF</span>
                    <h1 className="display-3 fw-bold mb-4">Everything You Need to Create a Website</h1>
                    <p className="lead mb-5">Up to 75% off Hosting + Free Domain + Free Website Builder.</p>

                    <div className="d-flex justify-content-center gap-3 mb-5">
                        <a href="/services.html"
                            className="btn btn-light btn-lg text-primary fw-bold px-5 py-3 rounded-pill">Get Started</a>
                        <a href="/services.html"
                            className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill border-2">View Plans</a>
                    </div>

                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mt-4 text-white-50">
                        <span><i className="fas fa-check text-success me-2"></i>Free SSL</span>
                        <span><i className="fas fa-check text-success me-2"></i>Free Domain</span>
                        <span><i className="fas fa-check text-success me-2"></i>24/7 Support</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section-padding bg-light-purple">
        <div className="container">
            <div className="section-title mb-4">
                <h2 className="fs-1">Find the Perfect Domain Name</h2>
                <p>Enter your domain name and choose the extension that fits you best.</p>
            </div>

            <div className="domain-search-box">
                <input type="text" id="domainInput"
                    placeholder="Search for your perfect domain name (e.g. mywebsite.com)" />
                <button type="button" id="searchDomainBtn" className="btn btn-primary px-4 fw-bold">Search</button>
            </div>

            <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
                <div className="text-center">
                    <strong className="fs-5 text-dark">.com</strong>
                    <div className="text-primary fw-bold">$4.99/yr</div>
                </div>
                <div className="text-center">
                    <strong className="fs-5 text-dark">.net</strong>
                    <div className="text-primary fw-bold">$7.99/yr</div>
                </div>
                <div className="text-center">
                    <strong className="fs-5 text-dark">.org</strong>
                    <div className="text-primary fw-bold">$9.99/yr</div>
                </div>
                <div className="text-center">
                    <strong className="fs-5 text-dark">.io</strong>
                    <div className="text-primary fw-bold">$29.99/yr</div>
                </div>
            </div>
        </div>
    </section>

    <section className="section-padding">
        <div className="container">
            <div className="section-title">
                <h2>Our Hosting Services</h2>
                <p>Choose the perfect hosting plan for your needs.</p>
            </div>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 p-4 border-0 shadow-sm text-center">
                        <div className="card-body">
                            <div className="mb-4">
                                <i className="fas fa-server fs-1 text-primary"></i>
                            </div>
                            <h3 className="card-title h4">Web Hosting</h3>
                            <p className="card-text text-muted mb-4">Perfect for small to medium websites and blogs.</p>
                            <h4 className="text-primary mb-4">From $2.99/mo</h4>
                            <a href="/services.html" className="btn btn-outline-primary w-100">See Plans</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 p-4 border-0 shadow-sm text-center"
                        style={{"border":"2px solid var(--primary-color) !important"}}>
                        <span
                            className="badge bg-primary position-absolute top-0 start-50 translate-middle py-2 px-3 rounded-pill">MOST
                            POPULAR</span>
                        <div className="card-body">
                            <div className="mb-4 mt-2">
                                <i className="fas fa-cloud fs-1 text-primary"></i>
                            </div>
                            <h3 className="card-title h4">Cloud Hosting</h3>
                            <p className="card-text text-muted mb-4">For large scale projects that need high performance.
                            </p>
                            <h4 className="text-primary mb-4">From $9.99/mo</h4>
                            <a href="/services.html" className="btn btn-primary w-100">See Plans</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 p-4 border-0 shadow-sm text-center">
                        <div className="card-body">
                            <div className="mb-4">
                                <i className="fas fa-microchip fs-1 text-primary"></i>
                            </div>
                            <h3 className="card-title h4">VPS Hosting</h3>
                            <p className="card-text text-muted mb-4">Dedicated resources to scale your big project.</p>
                            <h4 className="text-primary mb-4">From $5.99/mo</h4>
                            <a href="/services.html" className="btn btn-outline-primary w-100">See Plans</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section-padding bg-body">
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
                    <h2 className="display-5 fw-bold mb-4">Lightning Fast Web Hosting</h2>
                    <p className="lead text-muted mb-4">We use state-of-the-art server hardware, NVMe storage, and advanced
                        caching to make your website fly.</p>
                    <ul className="list-unstyled">
                        <li className="mb-3 d-flex align-items-center"><i
                                className="fas fa-check-circle text-success fs-5 me-3"></i> 99.9% Uptime Guarantee</li>
                        <li className="mb-3 d-flex align-items-center"><i
                                className="fas fa-check-circle text-success fs-5 me-3"></i> Free SSL Certificate</li>
                        <li className="mb-3 d-flex align-items-center"><i
                                className="fas fa-check-circle text-success fs-5 me-3"></i> Weekly Backups</li>
                        <li className="mb-3 d-flex align-items-center"><i
                                className="fas fa-check-circle text-success fs-5 me-3"></i> 30-Day Money-Back Guarantee</li>
                    </ul>
                    <a href="/about.html" className="btn btn-primary mt-3">Learn More About Us</a>
                </div>
                <div className="col-lg-6">
                    <img src="/assets/image/photo-1558494949-ef010cbdcc31.avif"
                        alt="Server Infrastructure" className="img-fluid rounded-4 shadow-lg" />
                </div>
            </div>
        </div>
    </section>

    <Footer />
        </>
    );
};

export default Home;
