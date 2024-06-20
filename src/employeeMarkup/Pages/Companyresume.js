import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import CompanySideBar from "../Layout/companySideBar";

const postResume = [
  { id: 1, title: "Tammy Dixon", jobTitle: "UX / UI Designer", skills: ["PHP", "Angular", "Bootstrap"] },
  { id: 2, title: "John Doe", jobTitle: "Frontend Developer", skills: ["React", "JavaScript", "CSS"] },
  { id: 3, title: "Ali Tufan", jobTitle: "Backend Developer", skills: ["Node.js", "MongoDB", "Express"] },
  { id: 4, title: "David Kamal", jobTitle: "Full Stack Developer", skills: ["PHP", "Angular", "Node.js"] },
  { id: 5, title: "Tammy Dixon", jobTitle: "UX / UI Designer", skills: ["Photoshop", "Illustrator", "CSS"] },
  { id: 6, title: "John Doe", jobTitle: "Frontend Developer", skills: ["Vue", "JavaScript", "HTML"] },
  { id: 7, title: "David Kamal", jobTitle: "Full Stack Developer", skills: ["PHP", "Vue", "Node.js"] },
  { id: 8, title: "Ali Tufan", jobTitle: "Backend Developer", skills: ["Python", "Django", "PostgreSQL"] },
];

function EmployeeCompanyresume() {
  const [selectedJobTitle, setSelectedJobTitle] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [view, setView] = useState("all");
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const [jobTitleDropdownOpen, setJobTitleDropdownOpen] = useState(false);

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
    const scheduledCandidate = postResume.find((item) => item.id === id);
    scheduledCandidate.meetLink = `https://meet.google.com/?authuser=0`;
    if (!shortlisted.includes(id)) {
      setShortlisted([...shortlisted, id]);
      if (rejected.includes(id)) {
        setRejected(rejected.filter((rejectId) => rejectId !== id));
      }
    }
  };

  const jobTitles = ["All", ...new Set(postResume.map((item) => item.jobTitle))];
  const skills = [
    ...new Set(postResume.flatMap((item) => item.skills)),
  ];

  const filteredResumes =
    selectedJobTitle === "All"
      ? postResume
      : postResume.filter((item) => item.jobTitle === selectedJobTitle);

  const skillFilteredResumes = selectedSkills.length
    ? filteredResumes.filter((item) =>
        selectedSkills.every((skill) => item.skills.includes(skill))
      )
    : filteredResumes;

  const allCount = postResume.length;
  const shortlistedCount = shortlisted.length;
  const rejectedCount = rejected.length;

  let displayedResumes = [];
  if (view === "all") {
    displayedResumes = skillFilteredResumes;
  } else if (view === "shortlisted") {
    displayedResumes = postResume.filter((item) => shortlisted.includes(item.id));
  } else if (view === "rejected") {
    displayedResumes = postResume.filter((item) => rejected.includes(item.id));
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
                    <ul className="post-job-bx browse-job-grid post-resume row">
                      {displayedResumes.map((item, index) => (
                        <li className="col-lg-6 col-md-6" key={index}>
                          <div className="post-bx">
                            <div className="d-flex m-b20">
                              <div className="job-post-info">
                                <h5 className="m-b0">
                                  <Link to={"/employee/jobs-profile"}>
                                    {item.title}
                                  </Link>
                                </h5>
                                <p className="m-b5 font-13">
                                  <Link to={"#"} className="text-primary">
                                    {item.jobTitle}
                                  </Link>{" "}
                                  at Atract Solutions
                                </p>
                                <ul>
                                  <li>
                                    <i className="fa fa-map-marker"></i>
                                    Sacramento, California
                                  </li>
                                  <li>
                                    <i className="fa fa-money"></i> $ 2500
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="job-time m-t15 m-b10">
                              {item.skills.map((skill, skillIndex) => (
                                <Link to={"#"} className="mr-1" key={skillIndex}>
                                                                   <span>{skill}</span>
                                </Link>
                              ))}
                            </div>
                            <div className="">
                              <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={() => handleShortlist(item.id)}
                              >
                                {shortlisted.includes(item.id)
                                  ? "Unshortlist"
                                  : "Shortlist"}
                              </button>{" "}
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => handleReject(item.id)}
                              >
                                {rejected.includes(item.id) ? "Unreject" : "Reject"}
                              </button>{" "}
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={() => handleSchedule(item.id)}
                              >
                                Schedule
                              </button>
                            </div>
                            {item.meetLink && (
                              <div className="m-t10">
                                <a
                                  href={item.meetLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-outline-info"
                                >
                                  Click here for Google Meet Link
                                </a>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="pagination-bx float-right">
                      <ul className="pagination">
                        <li className="previous">
                          <Link to={"#"}>
                            <i className="ti-arrow-left"></i> Prev
                          </Link>
                        </li>
                        <li className="active">
                          <Link to={"#"}>1</Link>
                        </li>
                        <li>
                          <Link to={"#"}>2</Link>
                        </li>
                        <li>
                          <Link to={"#"}>3</Link>
                        </li>
                        <li className="next">
                          <Link to={"#"}>
                            Next <i className="ti-arrow-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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
