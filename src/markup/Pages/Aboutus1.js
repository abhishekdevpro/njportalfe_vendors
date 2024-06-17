import React, { useState, useEffect } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link, useNavigate } from "react-router-dom";
//import video from '../../assests/HyperV Solutions.mp4';
import logo1 from '../../assests/logo1.jpg';
import logo2 from '../../assests/logo2.jpg';
import pic1 from '../../assests/1 (1).png';
import pic2 from '../../assests/1 (2).png';
import pic3 from '../../assests/1 (3).png';
import pic4 from '../../assests/1 (4).png';
import pic5 from '../../assests/1 (5).png';
import pic6 from '../../assests/1 (6).png';
import pic7 from '../../assests/1 (7).png';
import pic8 from '../../assests/1 (8).png';
import pic9 from '../../assests/1 (9).png';
import pic10 from '../../assests/1 (10).png';
import pic11 from '../../assests/1 (11).png';
import pic12 from '../../assests/1 (12).png';
import pic13 from '../../assests/1 (13).png';
import { Carousel } from 'react-bootstrap';



// Aboutus1 :
function Aboutus1() {
    return (  <>
        <Header />
        <div className="page-content bg-white">
            <div className="content-block">
                <div className="section-full bg-white p-t50 p-b20">
                    <div className="container">
                        <div className="m-b30">

                            <div className="job-bx">
                                <div className="d-flex justify-content-around  mt-5">
                                    <div style={{ width:'350px' }} className="mx-5 float-left">
                                    <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>Introduction </h1>
                                    <p style={{ fontSize: "clamp(14px, 3vw, 15px)" }}>We are Hyper V Solutions, a technical AI-driven business incubator at University of South Carolina, your gateway to a future of endless career possibilities. Our mission is simple yet powerful: to revolutionize recruitment by seamlessly connecting talented individuals with rewarding opportunities. With our advanced AI job portal Nova Jobs and comprehensive human capital services, we ensure a seamless experience for both job seekers and employers.</p>                                
                                    </div>
                                    <div className="mx-5">
                                    <img src={logo1} alt="SBE Logo" style={{height:'400px',width:'300px'}}/>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                
                                <div className="candidate-title mx-5 px-5">
                                <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>Our Services Scope</h1>
                                    <p className="mb-0 px-3">Hyper V Solutions, offers a wide range of services. From AI Enabled Job Portal, Edtech portal to amazing AI enabled Home services. Below Video explains our services  in 7 minutes.</p>
                                    </div>
                               
                               <div className="d-flex justify-content-center my-4">
                               <iframe
    title='YouTube video'
    width='800'
    height='450'
    src="https://www.youtube.com/embed/0pTh-wN4gr8"
    frameBorder='0'
    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
></iframe>

                               </div><br/><br/>
                                <div className="candidate-title mx-5 px-5">
                                <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>NovaJobs.US</h1>
                                    <p className="mb-0">Hyper V Solutions, offers NovaJobs.us, which is AI-Enabled Job Portal with advanced functionality like Jobs search, Profile listing, Skill Test, Resume Building, AI Data Parsing & more.</p>
                                </div><br/>

                               <div className="d-flex justify-content-center">
                               <Carousel className="" style={{ width:'800px' }} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic10}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic11}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic12}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic13}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel>
                               </div>
       <br/><br/><br/>

<div className="d-flex justify-content-around gap-2 mt-5">
                                    
<div className="mx-5">
                                    <img src={logo2} alt="SBE Logo" style={{height:'400px',width:'400px'}}/>
                                    </div>
                                    <div style={{ width:'370px' }} className="">
                                    <h1 className="m-b5 " style={{ fontSize: "clamp(14px, 5vw, 30px)", fontWeight: 'bold' }}>Conclusion</h1>
                                <p style={{ fontSize: "clamp(14px, 3vw, 10px)"}}>As a registered Small Business Enterprise (SBE) and Disadvantaged Business Enterprise (DBE), diversity and inclusion are at the core of our values. We're committed to providing equal opportunities and support to all individuals. <br/>
                                <br/>
But our impact doesn't stop there. As part of the Hyper v Solutions incubator, we're joined by visionaries like Ultra Aura, an EdTech portal committed to shaping the future of education. Together, we're not just redefining recruitment – we're reshaping industries and driving positive change in our communities and beyond.</p>
                                
                                    </div>
                                    
                                </div><br/><br/> 

                                <div className="candidate-title mx-5 px-5 text-center ">
                                <h1 className="m-b5 " style={{ fontSize: "clamp(14px, 5vw, 20px)", fontWeight: 'semibold' }}>
                                Experience the difference of innovation and inclusivity at Nova US Jobs. Explore our website today and unlock your path to success.
                                </h1>
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