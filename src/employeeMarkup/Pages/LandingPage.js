import React, { useState } from "react";
import "../../css/landingPage.css";
import img from "../../images/360_F_309586333_FU8eARHr7QnC1TSPmvrIdqWp0qoRGMDM-removebg-preview.png";
import img7 from "../../images/services/1.jpeg"
import img2 from "../../images/services/2.jpeg";
import img3 from "../../images/services/3.jpeg";
import img4 from "../../images/services/4.jpeg";
import img5 from "../../images/services/5.jpeg";
import img6 from "../../images/services/6.jpeg";

import { Modal } from "react-bootstrap";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Headerservice from "../../markup/Layout/Headerservice";
import EmployeeHeader from "./../Layout/Header";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="position-relative">
    
    {localStorage.getItem("employeeLoginToken") ? (
                     <EmployeeHeader/> 
                    ) : (
                      <Headerservice/>
                    )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered // This will center the modal
      >
        <Modal.Header closeButton style={{ backgroundColor: "#fff" }}>
          <Modal.Title style={{ color: "#000" }}>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example3">
                  First name
                </label>
                <input type="text" id="form8Example3" className="form-control" />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example4">
                  Last name
                </label>
                <input type="text" id="form8Example4" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example5">
                  Email address
                </label>
                <input type="email" id="form8Example5" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example1">
                  Phone No.
                </label>
                <input type="number" id="form8Example1" className="form-control" />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example2">
                  Company Name
                </label>
                <input type="text" id="form8Example2" className="form-control" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-outline">
                <label className="form-label" htmlFor="form8Example2">
                  Designation
                </label>
                <input type="text" id="form8Example2" className="form-control" />
              </div>
            </div>
          </div>
          <div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form6Example7">
                Remark
              </label>
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
              ></textarea>
            </div>
            <button className="site-button">Submit</button>
          </div>
        </Modal.Body>
      </Modal><br/>
      <div className="position-absolute top-5 start-50 translate-middle text-center">
      <div className="container">
  <div className="row">
    <div className="col-12 d-flex justify-content-center mt-5 pt-5">
      <button className="site-button mt-5 fw-bold responsive-button " onClick={handleShow}>
        Explore Our one stop white label AI Enabled services for Employers & Staffing companies
      </button>
    </div>
  </div>
</div>
</div>


      <div className="banner">
        
        <div className="banner-text mt-5 pt-4">
          
          
          <h2>
            Nova Jobs us <br /> AI based job Portal
          </h2>
          
        </div>
        <div className="banner-img">
          <img src={img} alt="Banner" />
        </div>
      </div>

        <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img2} alt="Service 2" className="img-fluid" />
            <p className="text-center" style={{ fontSize: '20px' }}>For Employers & Staffing</p>
            <ul>
              <li>Payroll & Team manage</li>
              <li>Task assign</li>
              <li>One stop HR Solution</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img2} alt="Service 2" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Job Portal:</p>
            <ul>
              <li>Jobseeker Login</li>
              <li>Employer Login</li>
              <li>Vendor Login</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img3} alt="Service 3" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Skill Test:</p>
            <ul>
              <li>Timer Based</li>
              <li>Immediate Result</li>
              <li>Skill Badge Option</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        {/*<div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img4} alt="Service 4" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Functionality:</p>
            <ul>
              <li>Auto Job Match</li>
              <li>Skill Based Match</li>
              <li>Auto JD Writing ..</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div> */}
        <div className="col-12 col-md-6  mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img4} alt="Service 4" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Functionality:</p>
            <ul>
              <li>Auto Job Match</li>
              <li>Skill Based Match</li>
              <li>Auto JD Writing ..</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img5} alt="Service 5" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based CV Services:</p>
            <ul>
              <li>Live CV Score</li>
              <li>Live CV Builder</li>
              <li>Multiple Templates</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img6} alt="Service 6" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>Robust Vendor Panel:</p>
            <ul>
              <li>Bulk CV upload</li>
              <li>Bulk Opening upload</li>
              <li>Use Nova Services</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img7} alt="Service 7" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Add-ONS:</p>
            <ul>
              <li>Robust Wallet</li>
              <li>Secure Chats</li>
              <li>Vendor Login</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>
        {/*
        <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
          <div className="service-div">
            <img src={img7} alt="Service 7" className="img-fluid" />
            <p style={{ fontSize: '20px' }}>AI-Based Add-ONS:</p>
            <ul>
              <li>Robust Wallet</li>
              <li>Secure Chats</li>
              <li>Vendor Login</li>
            </ul>
            <button className="site-button" onClick={handleShow}>Interested?</button>
          </div>
        </div>*/}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
