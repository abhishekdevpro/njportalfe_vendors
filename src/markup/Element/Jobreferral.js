import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "../Layout/Header2";
import Footer from "../Layout/Footer";
import FixedHeader from "../Layout/fixedHeader";
import Profilesidebar from "./Profilesidebar";

function Jobreferral() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, phone, email, remark });
    // Reset form
    setName("");
    setPhone("");
    setEmail("");
    setRemark("");
  };

  return (
    <>
      <Header2 />
      <FixedHeader />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Profilesidebar data={"jobs-referral"} />
                
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx table-job-bx browse-job clearfix">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Add Referral
                      </h5>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="remark" className="form-label">Remark</label>
                        <textarea
                          className="form-control"
                          id="remark"
                          value={remark}
                          onChange={(e) => setRemark(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Jobreferral;
