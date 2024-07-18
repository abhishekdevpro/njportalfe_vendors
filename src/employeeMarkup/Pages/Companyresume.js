import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import CompanySideBar from "../Layout/companySideBar";

function EmployeeCompanyresume() {
  const [resumes, setResumes] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [view, setView] = useState("all");
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const [jobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("employeeLoginToken"); // or wherever you store your token
        const response = await axios.get("https://api.novajobs.us/api/employeer/jobs-applicants", {
          headers: {
            Authorization: token, // Assuming the token does not need 'Bearer'
          },
        });
        // Check if the response data is an array
        if (Array.isArray(response.data.data)) {
          // Map through the response data and extract job seekers' details
          const formattedResumes = response.data.data.map(item => item.jobskkers_detail);
          setResumes(formattedResumes);
        } else {
          setResumes([]);
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setResumes([]); // Set resumes to an empty array in case of error
      }
    };

    fetchData();
  }, []);

  const handleJobTitleChange = (event) => {
    setSelectedJobTitle(event.target.value);
  };

  const handleSkillsChange = (event) => {
    const { value, checked } = event.target;
    setSelectedSkills((prevSelectedSkills) =>
      checked ? [...prevSelectedSkills, value] : prevSelectedSkills.filter((skill) => skill !== value)
    );
  };

  const handleShortlist = (id) => {
    if (shortlisted.includes(id)) {
      setShortlisted(shortlisted.filter((shortlistId) => shortlistId !== id));
    } else {
      setShortlisted([...shortlisted, id]);
      if (rejected.includes(id)) {
        setRejected(rejected.filter((rejectId) => rejectId !== id));
      }
    }
  };

  const handleReject = (id) => {
    if (rejected.includes(id)) {
      setRejected(rejected.filter((rejectId) => rejectId !== id));
    } else {
      setRejected([...rejected, id]);
      if (shortlisted.includes(id)) {
        setShortlisted(shortlisted.filter((shortlistId) => shortlistId !== id));
      }
    }
  };

  const handleSchedule = (id) => {
    const scheduledCandidate = resumes.find((item) => item.id === id);
    scheduledCandidate.meetLink = `https://meet.google.com/?authuser=0`;
    if (!shortlisted.includes(id)) {
      setShortlisted([...shortlisted, id]);
      if (rejected.includes(id)) {
        setRejected(rejected.filter((rejectId) => rejectId !== id));
      }
    }
  };

  const jobTitles = ["All", ...new Set(resumes.map((item) => item.proffesional_title))];
  const skills = [
    ...new Set(resumes.flatMap((item) => item.ai_resume_parse_data.jobsMyResumeData.skillsValue.skills.split(', '))),
  ];

  const filteredResumes =
    selectedJobTitle === "All"
      ? resumes
      : resumes.filter((item) => item.proffesional_title === selectedJobTitle);

  const skillFilteredResumes = selectedSkills.length
    ? filteredResumes.filter((item) =>
        selectedSkills.every((skill) => item.ai_resume_parse_data.jobsMyResumeData.skillsValue.skills.includes(skill))
      )
    : filteredResumes;

  const allCount = resumes.length;
  const shortlistedCount = shortlisted.length;
  const rejectedCount = rejected.length;

  let displayedResumes = [];
  if (view === "all") {
    displayedResumes = skillFilteredResumes;
  } else if (view === "shortlisted") {
    displayedResumes = resumes.filter((item) => shortlisted.includes(item.id));
  } else if (view === "rejected") {
    displayedResumes = resumes.filter((item) => rejected.includes(item.id));
  }

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <CompanySideBar active="company-resume" />
                <div className="col-xl-9 col-lg-9 m-b30">
                  <div className="job-bx clearfix">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Applicant
                      </h5>
                      <Link
                        to={"/employee/company-manage-job/jobs"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="filter-container">
                        <label htmlFor="jobTitleFilter">Filter by Job Title: </label>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="jobTitleDropdownButton"
                            aria-haspopup="true"
                            aria-expanded={jobTitleDropdownOpen}
                            onClick={() => setJobTitleDropdownOpen(!jobTitleDropdownOpen)}
                          >
                            {selectedJobTitle === "All" ? "Select Job Title" : selectedJobTitle}
                          </button>
                          <div
                            className={`dropdown-menu ${jobTitleDropdownOpen ? "show" : ""}`}
                            aria-labelledby="jobTitleDropdownButton"
                          >
                            {jobTitles.map((title, index) => (
                              <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                  setSelectedJobTitle(title);
                                  setJobTitleDropdownOpen(false);
                                }}
                              >
                                {title}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="filter-container">
                        <label htmlFor="skillsFilter">Filter by Skills: </label>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="skillsDropdownButton"
                            aria-haspopup="true"
                            aria-expanded={skillsDropdownOpen}
                            onClick={() => setSkillsDropdownOpen(!skillsDropdownOpen)}
                          >
                            Select Skills
                          </button>
                          <div
                            className={`dropdown-menu ${skillsDropdownOpen ? "show" : ""}`}
                            aria-labelledby="skillsDropdownButton"
                          >
                            {skills.map((skill, index) => (
                              <div key={index} className="dropdown-item checkbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    value={skill}
                                    onChange={handleSkillsChange}
                                    checked={selectedSkills.includes(skill)}
                                  />
                                  {skill}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="view-buttons gap-4 mt-4 pt-2">
                        <button onClick={() => setView("all")} className="btn btn-outline-info">
                          All ({allCount})
                        </button>{" "}
                        <button onClick={() => setView("shortlisted")} className="btn btn-outline-success mx-2 ">
                          Shortlisted ({shortlistedCount})
                        </button>{" "}
                        <button onClick={() => setView("rejected")} className="btn btn-outline-danger">
                          Rejected ({rejectedCount})
                        </button>
                      </div>
                    </div>
                    <br/>
                    {displayedResumes.length === 0 ? (
                      <div className="text-center">
                        <p className="m-0">There are no applicants available now!</p>
                      </div>
                    ) : (
                      <ul className="post-job-bx browse-job-grid post-resume row">
                        {displayedResumes.map((item, index) => (
                          <li className="col-lg-6 col-md-6" key={index}>
                            <div className="post-bx">
                              <div className="d-flex m-b20">
                                <div className="job-post-info">
                                  <h5 className="m-b0">
                                    <Link to={"#"}>
                                      {item.first_name} {item.last_name}
                                    </Link>
                                  </h5>
                                  <p className="m-b5 font-13">
                                    <Link to={"#"} className="text-primary">
                                      {item.proffesional_title}
                                    </Link>
                                  </p>
                                  <ul>
                                    <li>
                                      <i className="fa fa-map-marker"></i> {item.country_id}
                                    </li>
                                    <li>
                                      <i className="fa fa-bookmark-o"></i> {item.age} years old
                                    </li>
                                    <li>
                                      <i className="fa fa-clock-o"></i>{" "}
                                      {item.experience_in_month} months experience
                                    </li>
                                    <li>
                                      <i className="fa fa-envelope"></i> {item.email}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="job-time m-t15 m-b10">
                                <Link
                                  to={"#"}
                                  className="mr-2"
                                  onClick={() => handleShortlist(item.id)}
                                >
                                  <span
                                    className={`p-2 ${shortlisted.includes(item.id) ? "badge badge-warning" : "badge badge-primary"
                                      }`}
                                  >
                                    {shortlisted.includes(item.id) ? "Shortlisted" : "Shortlist"}
                                  </span>
                                </Link>
                                <Link
                                  to={"#"}
                                  className="mr-2"
                                  onClick={() => handleReject(item.id)}
                                >
                                  <span
                                    className={`p-2 ${rejected.includes(item.id) ? "badge badge-warning" : "badge badge-danger"
                                      }`}
                                  >
                                    {rejected.includes(item.id) ? "Rejected" : "Reject"}
                                  </span>
                                </Link>
                                <Link
                                  to={"#"}
                                  className="mr-2"
                                  onClick={() => handleSchedule(item.id)}
                                >
                                  <span className="p-2 badge badge-info">Schedule Interview</span>
                                </Link>
                                {item.meetLink && (
                                  <Link to={item.meetLink} target="_blank">
                                    <span className="p-2 badge badge-info">Meet Link</span>
                                  </Link>
                                )}
                              </div>
                              <Link to={"#"} className="job-links">
                                View Resume
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default EmployeeCompanyresume;
