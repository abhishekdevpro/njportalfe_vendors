import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showToastError, showToastSuccess } from "../../utils/toastify";

function VerifyEmailemployee() {
  const navigate = useNavigate();
  const token = localStorage.getItem("employeeLoginToken");

  useEffect(() => {
    const verifyEmail = async () => {
      

      try {
        const headers = {
          Authorization: token,
        };

        const response = await axios.get(
          "https://api.novajobs.us/api/employee/verify-account/",
          { headers }
        );

        console.log(response);

        if (response.data.success && response.data.success.token) {
          showToastSuccess("Email verified successfully");
          navigate("/employee");
        } else {
          showToastError("Verification failed");
          navigate("/employee/login");
        }
      } catch (error) {
        console.error("Verification Error:", error);
        showToastError("Invalid token or email");
        navigate("/employee/login");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return <div>Verifying...</div>;
}

export default VerifyEmailemployee;
