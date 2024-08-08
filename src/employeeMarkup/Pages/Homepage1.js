import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import CountUp from "react-countup";
import IndexBanner from "./../Element/IndexBanner";
import Jobcategories from "./../Element/Jobcategories";
import Featureblog from "./../Element/Featureblog";
import Jobsection from "./../Element/Jobsection";
import Owltestimonial from "./../Element/Owlblog1";
import axios from "axios";
import { showToastError } from "../../utils/toastify";
import {
  FaRegEdit,
  FaRegFileAlt,
  FaRegFilePdf,
  FaRegUser,
  FaStar,
} from "react-icons/fa";

//Images
var bnr2 = require("./../../images/background/bg4.jpg");
var bnr3 = require("./../../images/lines.png");
function EmployeeHomepage() {
  return (
    <div className="page-wraper">
      <Header />
      <div className="page-content">
        <IndexBanner />
       
        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <div className="two-box-container " style={{ color: "white" }}>
                <div className="bg-danger red-box">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaStar />
                      <h3
                        style={{
                          fontSize: "17px",
                          color: "white",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Looking For a Job
                      </h3>
                    </div>
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      List your profile, check your resume score, search jobs, with advance filters and power of AI

                    </p>
                    <Link
                      to={"/user/job/2"}
                      style={{ color: "white" }}
                    >
                     <button type="button" className="btn text-white hoverlogo-3d" style={{backgroundColor:"#080F3A"}}>Apply Now</button>
                    </Link>
                  </div>
                </div>
                <div className="blue-box">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      alignItems: "flex-start",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <FaRegEdit />

                      <h3
                        style={{
                          fontSize: "17px",
                          color: "white",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Are you an Employer?
                      </h3>
                    </div>

                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      List your company, post jobs, search talent with advanced filters and power of AI{" "}
                    </p>
                    <Link
                      to={"/employee/register-2"}
                      style={{ color: "white" }}
                    >
                      <button type="button" class="btn btn-danger hoverlogo-3d">Search Talent</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-column bg-white align-items-center"
          style={{ gap: "20px", padding: "20px" }}
        >
          <h2
            className="m-0 "
            style={{
              fontSize: "28px",
              fontWeight: "600",
              lineHeight: "1.3em",
              textAlign: "center",
              color: "#09213c",
            }}
          >
            Why You Choose us Among
            <br />
            other Job Sites.
          </h2>
        

          <div className="two-box-container">
            
            <div className="card">
              <div className="card-icon ">
                <FaRegFileAlt />
              </div>
              <h3>Check Resume Score</h3>
              <p>Our AI Gives Immediate Score On Your Resume.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaRegFilePdf />
              </div>
              <h3>Build Your Public Profile</h3>
              <p>Add Your Details To Reach leading Companies.</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaRegUser />
              </div>
              <h3>AI Skill Testing Tool</h3>
              <p>AI Skill Testing Tool & Earn Rewards.</p>
            </div>
          </div>
        </div>
        <Featureblog />
        <Jobsection />
        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <h2 className="m-b5">Testimonials</h2>
              
            </div>
            <Owltestimonial />
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
export default EmployeeHomepage;
