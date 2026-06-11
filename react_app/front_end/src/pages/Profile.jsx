import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <>
            

    <div className="container section-padding">
        <div className="row g-4">

            <div className="col-lg-3">
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-0">
                        <div className="p-4 border-bottom text-center">
                            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{"width":"80px","height":"80px","fontSize":"2rem"}}>
                                JD
                            </div>
                            <h5 className="fw-bold mb-1">John Doe</h5>
                            <p className="text-muted small mb-0">john.doe@example.com</p>
                        </div>
                        <div className="list-group list-group-flush">
                            <Link to="/profile"
                                className="list-group-item list-group-item-action p-3 active fw-bold border-start border-4 border-primary bg-primary bg-opacity-10 text-primary">
                                <i className="fas fa-user me-2 w-20px"></i> My Profile
                            </Link>
                            <Link to="/order-history" className="list-group-item list-group-item-action p-3 text-muted">
                                <i className="fas fa-file-invoice-dollar me-2 w-20px"></i> Order History
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action p-3 text-muted">
                                <i className="fas fa-server me-2 w-20px"></i> My Services
                            </Link>
                            <Link to="#" className="list-group-item list-group-item-action p-3 text-muted">
                                <i className="fas fa-life-ring me-2 w-20px"></i> Support Tickets
                            </Link>
                            <Link to="/login"
                                className="list-group-item list-group-item-action p-3 text-danger border-top">
                                <i className="fas fa-sign-out-alt me-2 w-20px"></i> Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-9">
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4 p-md-5">
                        <h2 className="fw-bold mb-4">Personal Information</h2>

                        <form>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">First Name</label>
                                    <input type="text" className="form-control" value="John" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Last Name</label>
                                    <input type="text" className="form-control" value="Doe" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Email Address</label>
                                    <input type="email" className="form-control" value="john.doe@example.com" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Phone Number</label>
                                    <input type="text" className="form-control" value="+91 9012345678" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Address</label>
                                    <input type="text" className="form-control" value="123 Tech Boulevard" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">City</label>
                                    <input type="text" className="form-control" value="342 Tech City" />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold">State/Region</label>
                                    <input type="text" className="form-control" value="IN" />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label fw-semibold">Zip</label>
                                    <input type="text" className="form-control" value="XXXXXX" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary px-4 py-2">Save Changes</button>
                        </form>
                    </div>
                </div>

                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4 p-md-5">
                        <h3 className="fw-bold mb-4">Change Password</h3>

                        <form>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label fw-semibold">Current Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">New Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Confirm New Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="button" className="btn btn-primary px-4 py-2">Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

            </>
    );
};

export default Profile;
