import React from 'react';

const About = () => {
    return (
        <>
            

    <div className="bg-light-purple py-5">
        <div className="container py-5 text-center">
            <h1 className="display-4 fw-bold mb-4">Empowering people through the internet</h1>
            <p className="lead text-muted max-w-700 mx-auto">We are Hoster. We believe that everyone deserves an online
                presence. Our mission is to make life easier for website developers and their customers.</p>
        </div>
    </div>

    <section className="py-5 border-bottom">
        <div className="container">
            <div className="row g-4 text-center">
                <div className="col-md-3 col-6">
                    <h2 className="display-5 fw-bold text-primary">2M+</h2>
                    <p className="text-muted text-uppercase fw-semibold mb-0">Customers</p>
                </div>
                <div className="col-md-3 col-6">
                    <h2 className="display-5 fw-bold text-primary">150+</h2>
                    <p className="text-muted text-uppercase fw-semibold mb-0">Countries</p>
                </div>
                <div className="col-md-3 col-6">
                    <h2 className="display-5 fw-bold text-primary">1000+</h2>
                    <p className="text-muted text-uppercase fw-semibold mb-0">Employees</p>
                </div>
                <div className="col-md-3 col-6">
                    <h2 className="display-5 fw-bold text-primary">10+</h2>
                    <p className="text-muted text-uppercase fw-semibold mb-0">Years of Experience</p>
                </div>
            </div>
        </div>
    </section>

    <section className="section-padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Our Team" className="img-fluid rounded-4 shadow-lg" />
                </div>
                <div className="col-lg-6 ps-lg-5">
                    <h2 className="fw-bold mb-4">Our Story</h2>
                    <p className="text-muted fs-5 mb-4">Founded in 2016, Hoster started with a simple idea: to let people
                        create websites for free. With unlimited PHP, MySQL, cPanel & no ads, we gave everyone the tools
                        they needed to start their online journey.</p>
                    <p className="text-muted fs-5 mb-4">Today, we provide world-class web hosting services to millions of
                        people around the globe. We use the latest technologies to ensure our servers are fast,
                        reliable, and secure.</p>
                    <div className="d-flex align-items-center">
                        <div className="me-4">
                            <i className="fas fa-rocket text-primary fs-1"></i>
                        </div>
                        <div>
                            <h5 className="fw-bold mb-1">Constant Innovation</h5>
                            <p className="text-muted mb-0">We never stop improving our platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </>
    );
};

export default About;
