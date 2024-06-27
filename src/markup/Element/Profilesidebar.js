import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/profilesidebar.css"
function Profilesidebar({ data }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onLogout = () => {
    localStorage.removeItem("jobSeekerLoginToken");
    navigate("/user/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''} overflow-y`}>
        <div className="sticky-top overflow-y">
          <div className="candidate-info overflow-y">
            <ul>
              <li>
                <Link
                  to={"/user/jobs-profile"}
                  className={data === "profile" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"https://ai-resume-iota.vercel.app/"}
                  className={data === "resume" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>AI Resume Builder</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-my-resume"}
                  className={data === "resume" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>My Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-saved-jobs"}
                  className={data === "saved-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                  <span>Saved Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-applied-job"}
                  className={data === "applied-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <span>Applied Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-alerts"}
                  className={data === "alerts-jobs" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/skill-test"}
                  className={data === "skill-test" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <span>Skill Test</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/jobs-change-password"}
                  className={data === "password" ? "active" : null}
                  onClick={() => setSidebarOpen(false)}
                >
                  <i className="fa fa-key" aria-hidden="true"></i>
                  <span>Change Password</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/user/login"}
                  onClick={() => {
                    onLogout();
                    setSidebarOpen(false);
                  }}
                >
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilesidebar;
