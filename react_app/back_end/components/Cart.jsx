import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
    return (
        <>
            <Header />

    <div className="container section-padding">
        <h1 className="h2 fw-bold mb-4">You're almost there! Complete your order</h1>
        
        <div className="row g-4">
            <div className="col-lg-8">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <div>
                                <h3 className="h5 fw-bold mb-1">Premium Web Hosting</h3>
                                <p className="text-muted small mb-0">Includes Free SSL & Free Domain</p>
                            </div>
                            <button className="btn btn-sm btn-outline-danger delete-item" data-tier="premium"><i className="fas fa-trash-alt"></i></button>
                        </div>

                        <div className="row g-3 mt-2">
                            <div className="col-md-3 col-6">
                                <div className="border rounded p-3 text-center cursor-pointer plan-selector" data-tier="premium" data-duration="1">
                                    <div className="fw-bold mb-1">1 Month</div>
                                    <div className="fs-5">$11.99<span className="fs-6 text-muted">/mo</span></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="border rounded p-3 text-center cursor-pointer border-primary bg-primary bg-opacity-10 position-relative plan-selector" data-tier="premium" data-duration="12">
                                    <span className="position-absolute top-0 start-50 translate-middle badge bg-success">Save 75%</span>
                                    <div className="fw-bold mb-1 mt-2">12 Months</div>
                                    <div className="fs-5">$2.99<span className="fs-6 text-muted">/mo</span></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="border rounded p-3 text-center cursor-pointer plan-selector" data-tier="premium" data-duration="24">
                                    <span className="position-absolute top-0 start-50 translate-middle badge bg-success d-none">Save 75%</span>
                                    <div className="fw-bold mb-1">24 Months</div>
                                    <div className="fs-5">$2.49<span className="fs-6 text-muted">/mo</span></div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="border rounded p-3 text-center cursor-pointer plan-selector" data-tier="premium" data-duration="48">
                                    <div className="fw-bold mb-1">48 Months</div>
                                    <div className="fs-5">$1.99<span className="fs-6 text-muted">/mo</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <h4 className="h6 fw-bold mb-3"><i className="fas fa-gift text-primary me-2"></i> Eligible for a Free Domain!</h4>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter desired domain name" />
                            <select className="form-select" style={{"maxWidth":"100px"}}>
                                <option>.com</option>
                                <option>.net</option>
                                <option>.org</option>
                            </select>
                            <button className="btn btn-primary" type="button">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card border-0 shadow-sm sticky-top" style={{"top":"100px"}}>
                    <div className="card-body p-4">
                        <h3 className="h5 fw-bold mb-4">Order Summary</h3>
                        
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Premium Web Hosting (12 Months)</span>
                            <span id="summary-base-price">$143.88</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2 text-success">
                            <span id="summary-discount">Discount -75%</span>
                            <span id="summary-discount-amount">-$107.91</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <span className="text-muted">Domain Registration</span>
                            <span className="text-success">Free</span>
                        </div>
                        
                        <hr />
                        
                        <div className="d-flex justify-content-between mb-4 align-items-center">
                            <span className="fw-bold fs-5">Total</span>
                            <span className="fw-bold fs-3 text-primary" id="summary-total">$35.88</span>
                        </div>
                        
                        <div className="mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label small text-muted" htmlFor="flexCheckDefault">
                                    I agree to the Terms of Service
                                </label>
                            </div>
                        </div>
                        
                        <a href="payment.html" className="btn btn-primary btn-lg w-100 fw-bold shadow-sm">Checkout Now</a>
                        <div className="text-center mt-3">
                            <i className="fas fa-lock text-success me-1"></i> <span className="small text-muted">Secure Encrypted Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
        </>
    );
};

export default Cart;
