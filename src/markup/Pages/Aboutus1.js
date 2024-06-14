import React, { useState, useEffect } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link, useNavigate } from "react-router-dom";


function Aboutus1() {
    return (  <>
        <Header />
        <div className="page-content bg-white">
            <div className="content-block">
                <div className="section-full bg-white p-t50 p-b20">
                    <div className="container">
                        <div className="m-b30">

                            <div className="job-bx">
                                <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>About Us for Nova US Jobs</h1>
                                <p>We are Hyper V Solutions a technical   AI driven business incubator at University of South Carolina, your gateway to a future of endless career possibilities. Our mission is simple yet powerful: to revolutionize recruitment by seamlessly connecting talented individuals with rewarding opportunities. With our advanced AI job portal Nova Jobs and comprehensive human capital services, we ensure a seamless experience for both job seekers and employers.
                                </p>
                                <div className="candidate-title">
                                    <h2 className="mb-0" style={{ fontSize: "22px" }}>Acceptance </h2>
                                    <p className="mb-0">As a registered Small Business Enterprise (SBE) and Disadvantaged Business Enterprise (DBE), diversity and inclusion are at the core of our values. We're committed to providing equal opportunities and support to all individuals.
                                    </p>
                                </div>
                                <div className="candidate-title">
                                    <h2 className="mb-0" style={{ fontSize: "22px" }}>Our Service video:</h2>
                                    <p className="mb-0">The Website is provided for informational purposes and to facilitate job searching and hiring. You agree to use the Website only for lawful purposes and in accordance with these Terms.
                                    But our impact doesn't stop there. As part of the Hyper v Solutions incubator, we're joined by visionaries like Ultra Aura, an EdTech portal committed to shaping the future of education. Together, we're not just redefining recruitment – we're reshaping industries and driving positive change in our communities and be</p>
                                </div>
                                <div className="d-flex justify-content-center my-2">
                                <iframe
                                title=''
                                src="https://vimeo.com/948286077"
                                allow="accelerometer; autoplay"
                                >  
                                </iframe>
                                </div>
                                <div className="candidate-title">
                                    <h2 className="mb-0" style={{ fontSize: "22px" }}>Experience:</h2>
                                    <p className="mb-0">Experience the difference of innovation and inclusivity at Nova US Jobs. Explore our website today and unlock your path to success.</p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default Aboutus1;