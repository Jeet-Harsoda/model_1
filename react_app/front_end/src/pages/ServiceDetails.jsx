import React from 'react';

const ServiceDetails = () => {
    return (
        <>
            

    <div className="bg-light-purple section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">MOST POPULAR</span>
                    <h1 className="display-5 fw-bold mb-3">Premium Web Hosting</h1>
                    <p className="lead text-muted mb-4">Everything you need to create your website. Ideal for personal websites and small business blogs.</p>
                    <div className="d-flex align-items-center mb-4">
                        <div className="fs-1 fw-bold text-dark me-2">$2.99<span className="fs-5 text-muted fw-normal">/mo</span></div>
                        <span className="badge bg-success py-2 px-3">-75% OFF</span>
                    </div>
                    <button className="btn btn-primary btn-lg px-5 py-3 add-to-cart-btn"><i className="fas fa-shopping-cart me-2"></i> Add to Cart</button>
                    <p className="text-muted small mt-3"><i className="fas fa-shield-alt text-success me-1"></i> 30-Day Money-Back Guarantee</p>
                </div>
                <div className="col-lg-6 text-center">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium Hosting" className="img-fluid rounded-4 shadow-lg" />
                </div>
            </div>
        </div>
    </div>

    <section className="section-padding">
        <div className="container">
            <div className="section-title">
                <h2>All Features You Get</h2>
                <p>Everything you need for a successful website.</p>
            </div>
            
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-globe"></i></div>
                        <div>
                            <h4 className="mb-2">100 Websites</h4>
                            <p className="text-muted">Host up to 100 different websites under one single hosting account.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-hdd"></i></div>
                        <div>
                            <h4 className="mb-2">100 GB SSD Storage</h4>
                            <p className="text-muted">Super-fast SSD storage ensures your website loads incredibly fast.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-users"></i></div>
                        <div>
                            <h4 className="mb-2">~25 000 Visits Monthly</h4>
                            <p className="text-muted">Perfect amount of bandwidth for growing websites and blogs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-envelope"></i></div>
                        <div>
                            <h4 className="mb-2">Free Email</h4>
                            <p className="text-muted">Create professional business email addresses (e.g., info@yourdomain.com).</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-lock"></i></div>
                        <div>
                            <h4 className="mb-2">Unlimited Free SSL</h4>
                            <p className="text-muted">Secure your websites and improve your SEO with free SSL certificates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div className="fs-2 text-primary me-3"><i className="fas fa-gift"></i></div>
                        <div>
                            <h4 className="mb-2">Free Domain</h4>
                            <p className="text-muted">Get a free domain name for the first year with an annual plan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </>
    );
};

export default ServiceDetails;
