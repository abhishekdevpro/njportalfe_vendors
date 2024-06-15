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
                                <div className="d-flex justify-content-center gap-2 mt-5">
                                    <div style={{ width:'500px' }} className="mx-5">
                                    <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>Introduction</h1>
                                <p style={{ fontSize: "clamp(20px, 3vw, 10px)"}}>We are Hyper V Solutions a technical AI driven business incubator at University of South Carolina, your gateway to a future of endless career possibilities. Our mission is simple yet powerful: to revolutionize recruitment by seamlessly connecting talented individuals with rewarding opportunities. With our advanced AI job portal Nova Jobs and comprehensive human capital services, we ensure a seamless experience for both job seekers and employers.</p>
                                
                                    </div>
                                    <div className="mx-5">
                                    <img src={logo1} alt="SBE Logo" style={{height:'400px',width:'300px'}}/>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="candidate-title mx-5 px-5">
                                    <h2 className="mb-0" style={{ fontSize: "22px" }}>Our Services Scope</h2>
                                    <p className="mb-0">Hyper V Solutions, offers a wide range of services. From AI Enabled Job Portal, Edtech portal to amazing AI enabled Home services. Below Video explains our services  in 7 minutes.</p>
                                    </div>
                               
                               <div className="d-flex justify-content-center my-4">
                                <iframe
                                style={{width:'800px',height:'450px'}}
                                title=''
                               // src={video}
                                allow="accelerometer; autoplay"
                                >  
                                </iframe>
                               </div>
                                <div className="candidate-title mx-5 px-5">
                                    <h2 className="mb-0" style={{ fontSize: "22px" }}>NovaJobs.US</h2>
                                    <p className="mb-0">Hyper V Solutions, offers NovaJobs.us, which is AI-Enabled Job Portal with advanced functionality like Jobs search, Profile listing, Skill Test, Resume Building, AI Data Parsing & more.</p>
                                </div>

                                <div id="carouselExampleAutoplaying" class="carousel slide mx-5 px-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic2}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="d-flex justify-content-center gap-2 mt-5">
<div className="mx-5">
                                    <img src={logo2} alt="SBE Logo" style={{height:'400px',width:'300px'}}/>
                                    </div>
                                    <div style={{ width:'500px' }} className="mx-5">
                                    <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>Conclusion</h1>
                                <p style={{ fontSize: "clamp(20px, 3vw, 10px)"}}>As a registered Small Business Enterprise (SBE) and Disadvantaged Business Enterprise (DBE), diversity and inclusion are at the core of our values. We're committed to providing equal opportunities and support to all individuals. <br/>
                                <br/>
But our impact doesn't stop there. As part of the Hyper v Solutions incubator, we're joined by visionaries like Ultra Aura, an EdTech portal committed to shaping the future of education. Together, we're not just redefining recruitment – we're reshaping industries and driving positive change in our communities and beyond.</p>
                                
                                    </div>
                                    
                                </div><br/><br/>
                               
                              
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