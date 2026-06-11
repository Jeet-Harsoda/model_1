import React from 'react';

const Faq = () => {
    return (
        <>
            

    <div className="accordion text-center" id="faq-accordion">
        <h1>FAQ</h1> 

        <div className="accordion-item">
            <h2 className="accordion-header" id="heading-one">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-one">
                    What is web hosting and how does it work?
                </button>
            </h2>
            <div id="collapse-one" className="accordion-collapse collapse"
            data-bs-parent="#faq-accordion">
                <div className="accordion-body">
                    Web hosting is a service that allows individuals and organizations to post a website or web page onto the Internet. A web host, or wireless hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading-two">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-two">
                    Which hosting plan is right for me?
                </button>
            </h2>
            <div id="collapse-two" className="accordion-collapse collapse"
            data-bs-parent="#faq-accordion">
                <div className="accordion-body">
                    If you are starting a brand new personal website or blog, our Single Web Hosting plan is ideal. For established personal sites or small businesses, the Premium plan offers the best balance of features and value.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading-three">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-three">
                    Do you provide a free domain name?
                </button>
            </h2>
            <div id="collapse-three" className="accordion-collapse collapse"
            data-bs-parent="#faq-accordion">
                <div className="accordion-body">
                    Yes! Our Premium and Business plans include a free domain registration ($9.99 value) for the first year of your subscription.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="heading-four">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-four">
                    Is there a money-back guarantee?
                </button>
            </h2>
            <div id="collapse-four" className="accordion-collapse collapse"
            data-bs-parent="#faq-accordion">
                <div className="accordion-body">
                    Absolutely. All of our hosting plans come with an unconditional 30-day money-back guarantee if you are not completely satisfied.
                </div>
            </div>
        </div>
    </div>

            </>
    );
};

export default Faq;
