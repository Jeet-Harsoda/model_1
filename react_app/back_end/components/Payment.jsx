import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Payment = () => {
    return (
        <>
            <Header />

    <div className="container section-padding">
        <div className="text-center mb-5">
            <h1 className="h2 fw-bold">Secure Checkout</h1>
            <p className="text-muted"><i className="fas fa-lock text-success me-2"></i>Your connection to this page is encrypted
                and secure.</p>
        </div>

        <div className="row justify-content-center g-4">
            <div className="col-lg-7">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4 p-md-5">
                        <h3 className="h5 fw-bold mb-4">Select Payment Method</h3>

                        <div className="d-flex flex-column gap-3 mb-4">
                            <label
                                className="border rounded p-3 d-flex align-items-center cursor-pointer border-primary bg-primary bg-opacity-10">
                                <input type="radio" name="paymentMethod" className="form-check-input me-3" checked />
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <span className="fw-bold"><i className="far fa-credit-card me-2"></i> Credit Card</span>
                                    <div>
                                        <i className="fab fa-cc-visa fs-4 text-primary mx-1"></i>
                                        <i className="fab fa-cc-mastercard fs-4 text-warning mx-1"></i>
                                        <i className="fab fa-cc-amex fs-4 text-info mx-1"></i>
                                    </div>
                                </div>
                            </label>

                            <label className="border rounded p-3 d-flex align-items-center cursor-pointer">
                                <input type="radio" name="paymentMethod" className="form-check-input me-3" />
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <span className="fw-bold"><i className="fab fa-paypal me-2" style={{"color":"#003087"}}></i>
                                        PayPal</span>
                                </div>
                            </label>

                            <label className="border rounded p-3 d-flex align-items-center cursor-pointer">
                                <input type="radio" name="paymentMethod" className="form-check-input me-3" />
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <span className="fw-bold"><i className="fab fa-google-pay me-2"></i> Google Pay</span>
                                </div>
                            </label>
                        </div>

                        <hr className="my-4" />

                        <h4 className="h6 fw-bold mb-3">Card Details</h4>
                        <div className="row g-3">
                            <div className="col-12">
                                <label className="form-label small text-muted">Name on Card</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className="col-12">
                                <label className="form-label small text-muted">Card Number</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-body"><i
                                            className="far fa-credit-card text-muted"></i></span>
                                    <input type="text" className="form-control border-start-0 ps-0"
                                        placeholder="0000 0000 0000 0000" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted">Expiry Date</label>
                                <input type="text" className="form-control" placeholder="MM/YY" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted">CVC</label>
                                <div className="input-group">
                                    <input type="text" className="form-control border-end-0" placeholder="123" />
                                    <span className="input-group-text bg-body"><i className="far fa-question-circle text-muted"
                                            title="3 digits on back of card"></i></span>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg w-100 mt-5 shadow"
                            onclick="window.location.href='order-history.html'">Pay $35.88 securely</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card border-0 shadow-sm sticky-top" style={{"top":"100px"}}>
                    <div className="card-body p-4 bg-body rounded">
                        <h3 className="h5 fw-bold mb-4">Order Summary</h3>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="fw-semibold">Premium Web Hosting</span>
                            <span>$143.88</span>
                        </div>
                        <div className="small text-muted mb-3">12 Months Plan</div>

                        <div className="d-flex justify-content-between mb-3 text-success">
                            <span>Discount</span>
                            <span>-$107.91</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-1 align-items-center">
                            <span className="fw-bold">Total</span>
                            <span className="fw-bold fs-4 text-primary">$35.88</span>
                        </div>
                        <div className="text-end small text-muted">Includes taxes if applicable</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
        </>
    );
};

export default Payment;
