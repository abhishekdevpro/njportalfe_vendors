import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need

import VendorCompanySideBar from "./Vendorsidebar";

function Vendorbulkuploadjobopeneing() {
  return (
    <>
    
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <VendorCompanySideBar active="vendorbulkuploadjobopeneing" />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx table-job-bx clearfix">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                      <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />
                     Upload Bulk Job opening
                      </h5>
                      
                    </div>
                    <div className="d-flex  justify-content-center gap-5 text-center "
                    >  <div className="mt-4">
                    <div className="card border w-100 p-3 rounded-5" style={{ fontSize: '1.5rem', fontWeight:'500', color:'white', backgroundColor:'#1C2957' }}>
                      <div className="card-body">
                      <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />
                        <h5 className="card-title">
                          Upload Bulk Job Posting
                        </h5>
                        
                        <Link
                          to={"/vendor/vendorbulkuploadjobopeneing"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary mt-3"
                        >
                          Upload
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="card border w-100 p-3 rounded-5" style={{ fontSize: '1.5rem', fontWeight:'500', color:'white', backgroundColor:'#1C2957' }}>
                      <div className="card-body">
                      <FontAwesomeIcon icon={faFileDownload} className="me-2" />
                        <h5 className="card-title">Download Our Template</h5>
                        
                        <a
                          href="/path/to/download/template"
                          className="btn btn-secondary mt-3"
                          download
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div></div>

                   
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
export default Vendorbulkuploadjobopeneing;
