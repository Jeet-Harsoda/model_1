import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
            <Header />

    <div className="bg-light-purple py-5">
        <div className="container text-center py-4">
            <h1 className="display-4 fw-bold mb-3">Get in touch</h1>
            <p className="lead text-muted">We'd love to hear from you. Please fill out this form or use our contact details.</p>
        </div>
    </div>

    <div className="container section-padding">
        <div className="row g-5">
            <div className="col-lg-7">
                <div className="card border-0 shadow-sm p-4 p-md-5 h-100">
                    <h3 className="fw-bold mb-4">Send us a message</h3>
                    <form>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">First name</label>
                                <input type="text" className="form-control" placeholder="John" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Last name</label>
                                <input type="text" className="form-control" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input type="email" className="form-control" placeholder="john@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Subject</label>
                            <input type="text" className="form-control" placeholder="How can we help you?" />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold">Message</label>
                            <textarea className="form-control" rows="5" placeholder="Leave us a message..."></textarea>
                        </div>
                        <button type="button" className="btn btn-primary btn-lg px-5">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="d-flex flex-column h-100 gap-4">
                    <div className="card border-0 shadow-sm p-4 border-start border-4 border-primary">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                                <i className="fas fa-headset fs-4"></i>
                            </div>
                            <h4 className="fw-bold mb-0">Customer Support</h4>
                        </div>
                        <p className="text-muted">Our support team is available 24/7 to help you with any issues.</p>
                        <div className="fw-bold fs-5 text-primary">+91 1234567890</div>
                        <div className="fw-bold fs-5 text-primary">support@hoster.com</div>
                    </div>

                    <div className="card border-0 shadow-sm p-4 border-start border-4 border-success">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle me-3">
                                <i className="fas fa-chart-line fs-4"></i>
                            </div>
                            <h4 className="fw-bold mb-0">Sales Inquiries</h4>
                        </div>
                        <p className="text-muted">Looking for a custom plan? Our sales team can help.</p>
                        <div className="fw-bold fs-5 text-success">sales@hoster.com</div>
                    </div>

                    <div className="card border-0 shadow-sm p-4 border-start border-4 border-warning">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-circle me-3">
                                <i className="fas fa-map-marker-alt fs-4"></i>
                            </div>
                            <h4 className="fw-bold mb-0">Our Office</h4>
                        </div>
                        <p className="text-muted mb-0">
                            123 Tech Boulevard<br />
                            435 Street<br />
                            India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
        </>
    );
};

export default Contact;
