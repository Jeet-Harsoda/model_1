import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Category = () => {
    return (
        <>
            <Header />

    <div className="bg-light-purple section-padding">
        <div className="container text-center">
            <h1 className="display-4 fw-bold">Hosting Categories</h1>
            <p className="lead text-muted max-w-700 mx-auto mt-3">Find the perfect hosting solution tailored to your specific needs, whether you're starting a personal blog or running a high-traffic enterprise application.</p>
        </div>
    </div>

    <section className="section-padding">
        <div className="container">
            <div className="row align-items-center mb-5 pb-5 border-bottom">
                <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Web Hosting" className="img-fluid rounded-4 shadow-sm" style={{"maxHeight":"350px","objectFit":"cover"}} />
                </div>
                <div className="col-lg-7 ps-lg-5">
                    <div className="d-inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-bold mb-3">Beginner Friendly</div>
                    <h2 className="mb-3">Web Hosting</h2>
                    <p className="text-muted mb-4 fs-5">The perfect starting point for most websites. Shared hosting allows multiple websites to utilize a single server, making it the most affordable option for beginners and small businesses.</p>
                    
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Free Domain
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Free SSL Certificate
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> 1-Click WordPress
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Weekly Backups
                            </div>
                        </div>
                    </div>
                    
                    <a href="/services.html" className="btn btn-primary px-4 py-2">View Web Hosting Plans <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
            </div>

            <div className="row align-items-center mb-5 pb-5 border-bottom flex-lg-row-reverse">
                <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                    <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="VPS Hosting" className="img-fluid rounded-4 shadow-sm" style={{"maxHeight":"350px","objectFit":"cover"}} />
                </div>
                <div className="col-lg-7 pe-lg-5">
                    <div className="d-inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-bold mb-3">For Developers</div>
                    <h2 className="mb-3">VPS Hosting</h2>
                    <p className="text-muted mb-4 fs-5">Virtual Private Server (VPS) hosting gives you dedicated resources and full root access. Perfect for developers, web designers, and medium-to-large businesses needing specific configurations.</p>
                    
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Full Root Access
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> NVMe SSD Storage
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Dedicated IP
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Multiple OS Choices
                            </div>
                        </div>
                    </div>
                    
                    <a href="/services.html" className="btn btn-primary px-4 py-2">View VPS Plans <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cloud Hosting" className="img-fluid rounded-4 shadow-sm" style={{"maxHeight":"350px","objectFit":"cover"}} />
                </div>
                <div className="col-lg-7 ps-lg-5">
                    <div className="d-inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-bold mb-3">High Performance</div>
                    <h2 className="mb-3">Cloud Hosting</h2>
                    <p className="text-muted mb-4 fs-5">Experience the ultimate performance and reliability. Cloud hosting spreads your data across multiple interconnected servers, ensuring zero downtime even during traffic spikes.</p>
                    
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Superior Speed
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Dedicated Resources
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Fully Managed
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-check text-success me-2"></i> Daily Backups
                            </div>
                        </div>
                    </div>
                    
                    <a href="/services.html" className="btn btn-primary px-4 py-2">View Cloud Plans <i className="fas fa-arrow-right ms-2"></i></a>
                </div>
            </div>
        </div>
    </section>

    <Footer />
        </>
    );
};

export default Category;
