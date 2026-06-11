import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
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
                            <Link to="/profile" className="list-group-item list-group-item-action p-3 text-muted">
                                <i className="fas fa-user me-2 w-20px"></i> My Profile
                            </Link>
                            <Link to="/order-history"
                                className="list-group-item list-group-item-action p-3 active fw-bold border-start border-4 border-primary bg-primary bg-opacity-10 text-primary">
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
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4 p-md-5">
                        <h2 className="fw-bold mb-4">Order History</h2>

                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Date</th>
                                        <th>Items</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="fw-bold text-primary">#ORD-90210</span></td>
                                        <td>May 16, 2026</td>
                                        <td>Premium Web Hosting (12 Months)</td>
                                        <td className="fw-bold">$35.88</td>
                                        <td><span
                                                className="badge bg-success bg-opacity-10 text-success border border-success px-2 py-1">Completed</span>
                                        </td>
                                        <td><button className="btn btn-sm btn-outline-secondary"><i
                                                    className="fas fa-download"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-bold text-primary">#ORD-88542</span></td>
                                        <td>May 16, 2025</td>
                                        <td>Premium Web Hosting (12 Months)</td>
                                        <td className="fw-bold">$35.88</td>
                                        <td><span
                                                className="badge bg-success bg-opacity-10 text-success border border-success px-2 py-1">Completed</span>
                                        </td>
                                        <td><button className="btn btn-sm btn-outline-secondary"><i
                                                    className="fas fa-download"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-bold text-primary">#ORD-76211</span></td>
                                        <td>May 10, 2024</td>
                                        <td>Domain Registration (.com)</td>
                                        <td className="fw-bold">$9.99</td>
                                        <td><span
                                                className="badge bg-danger bg-opacity-10 text-danger border border-danger px-2 py-1">Cancelled</span>
                                        </td>
                                        <td><button className="btn btn-sm btn-outline-secondary" disabled><i
                                                    className="fas fa-download"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <nav className="mt-4">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <Link className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</Link>
                                </li>
                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    </div>

            </>
    );
};

export default OrderHistory;
