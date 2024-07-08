import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmailemployee() {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const accessToken = localStorage.getItem("jobSeekerLoginToken"); // Example: Fetch from local storage

        const headers = {
          Authorization: accessToken,
          "Content-Type": "application/json", // Adjust content type as per API requirements
        };

        const response = await axios.get(
          `https://api.novajobs.us/api/jobseeker/verify-account/${token}`,
          { headers }
        );

        console.log(response);

        if (response.data.status === "error" && response.data.code === 400) {
          showToastError(response.data.message || "Invalid token");
          navigate("/user/login");
        } else if (response.data.success && response.data.success.token) {
          showToastSuccess(response.data, "Email verified successfully");
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

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>Verifying...</div>
  );
}

export default VerifyEmailemployee;
