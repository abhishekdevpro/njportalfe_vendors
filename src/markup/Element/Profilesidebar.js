import React from "react";
import { Link, useNavigate, withRouter } from "react-router-dom";

function Profilesidebar({ data }) {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("jobSeekerLoginToken");
    navigate("/user/login");
  };
  return (
    <div className="col-xl-3 col-lg-4 m-b30">
      <div className="sticky-top">
        <div className="candidate-info">
          <ul>
            <li>
              <Link
                to={"/user/jobs-profile"}
                className={data === "profile" ? "active" : null}>
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <span>Profile</span>
              </Link>
            </li>
            <li>
            <Link
                to={"https://ai-resume-sepia.vercel.app/"}
                className={data === "resume" ? "active" : null}>
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <span>AI Resume Builder</span>
              </Link>
            </li>
            <li>
            
              <Link
                to={"/user/jobs-my-resume"}
                className={data === "resume" ? "active" : null}>
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <span>My Resume</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/user/jobs-saved-jobs"}
                className={data === "saved-jobs" ? "active" : null}>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <span>Saved Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/user/jobs-applied-job"}
                className={data === "applied-jobs" ? "active" : null}>
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <span>Applied Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/user/jobs-alerts"}
                className={data === "alerts-jobs" ? "active" : null}>
                <i className="fa fa-bell-o" aria-hidden="true"></i>
                <span>Notifications</span>
              </Link>
            </li>
            {/* <li>
              <Link to={"/user/jobs-cv-manager"}>
                <i className="fa fa-id-card-o" aria-hidden="true"></i>
                <span>CV Manager</span>
              </Link>
            </li> */}
            <li>
              <Link
                to={"/user/skill-test"}
                className={data === "skill-test" ? "active" : null}>
                <i className="fa fa-id-card-o" aria-hidden="true"></i>
                <span>Skill Test</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/user/jobs-change-password"}
                className={data === "password" ? "active" : null}>
                <i className="fa fa-key" aria-hidden="true"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
            
              <Link to={"/user/login"}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                
                <span  onClick={() => onLogout()}>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Profilesidebar;
