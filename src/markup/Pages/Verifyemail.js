import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmail() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jobSeekerLoginToken");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const headers = {
          Authorization: token,
        };

        const response = await axios.get(
          "https://api.novajobs.us/api/jobseeker/verify-account/",
          { headers }
        );

        console.log(response);

        if (response.data.success && response.data.success.token) {
          showToastSuccess("Email verified successfully");
          navigate("/user");
        } else {
          showToastError("Verification failed");
          navigate("/user/login");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/user/login");
      }
    };

    if (token) {
      verifyEmail();
    } else {
      navigate("/user/login");
    }
  }, [token, navigate]);

  return <div>Verifying...</div>;
}

export default VerifyEmail;
