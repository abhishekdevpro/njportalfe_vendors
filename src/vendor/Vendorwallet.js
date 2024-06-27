import React from "react";
import { Link } from "react-router-dom";

import VendorCompanySideBar from "./Vendorsidebar";

function Vendorwallet() {
  return (
    <>
    
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <VendorCompanySideBar active="transactions" />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx table-job-bx clearfix">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                      Wallet History
                      </h5>
                      <Link
                        to={"/employee/company-profile"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <div className="d-flex justify-content-center"
                    ><h1>🚧  Wallet Section coming soon</h1></div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default Vendorwallet;
